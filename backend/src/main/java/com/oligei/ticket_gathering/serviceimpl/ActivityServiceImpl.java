package com.oligei.ticket_gathering.serviceimpl;


import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.dto.ActivitySortpage;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.service.ActivityService;
import com.oligei.ticket_gathering.util.CategoryQuery;
import org.apdplat.word.segmentation.Word;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apdplat.word.segmentation.Segmentation;
import org.apdplat.word.segmentation.WordRefiner;
import org.apdplat.word.segmentation.SegmentationAlgorithm;
import org.apdplat.word.segmentation.impl.AbstractSegmentation;
import org.apdplat.word.WordSegmenter;

import java.util.*;

@Service
public class ActivityServiceImpl implements ActivityService {

    @Autowired
    private ActivityDao activityDao;

    @Autowired
    private ActitemDao actitemDao;


    @Override
    public List<ActivitySortpage> search(String value) {
        if(value==null || value.equals("")){
            List<ActivitySortpage> activities=new LinkedList<>();
            for(int i=2;i<=50;++i){
                activities.add(findActivityAndActitem(i));
            }
            return activities;
        }
        List<Word> words= WordSegmenter.seg(value);
        System.out.println("words:"+words+words.size());
        int n=words.size();
        List<List<Activity>> activityList=new LinkedList<>();
        Set<Integer> idSet=new LinkedHashSet<>();
        for(int i=0;i<n;++i){
            String word=words.get(i).getText();
            word="%"+word+"%";
            List<Activity> tmp=activityDao.findAllByTitleOrVenueOrActor(word,word,word);
            System.out.println("tmp:"+tmp);
            activityList.add(tmp);
            for(int j=0;j<activityList.get(i).size();++j)
                idSet.add(activityList.get(i).get(j).getActivityId());
        }

        int[] idArray=new int[idSet.size()];
        int[] cntArray=new int[idSet.size()];
        int cnt=0;
        for(Integer i:idSet) {
            System.out.println("id:"+i);
            idArray[cnt] = i;
            cntArray[cnt]=0;
            ++cnt;
        }
        Arrays.sort(idArray);

        for(int i=0;i<n;++i)
            for(int j=0;j<activityList.get(i).size();++j){
                int index=Arrays.binarySearch(idArray,activityList.get(i).get(j).getActivityId());
                cntArray[index]++;
            }

        List<ActivitySortpage> activities=new LinkedList<>();
        int basic=0;
        if(n>2)basic=1;
        if(n>5)basic=2;
        if(n>10)basic=n-5;
        for(int i=idSet.size();i>basic;--i){
            for(int j=0;j<idSet.size();++j){
                if(cntArray[j]==i) {
                        ActivitySortpage activitySortpage = findActivityAndActitem(idArray[j]);
                        activities.add(activitySortpage);
                }
            }
        }
        return activities;
    }

    @Override
    public ActivitySortpage findActivityAndActitem(Integer id) {

        Activity activity;
        try{
            activity = activityDao.findOneById(id);
        }catch (javax.persistence.EntityNotFoundException e){
            return null;
        }
        if(activity==null) return null;
        List<Actitem> actitems=actitemDao.findAllByActivityId(id);

        return  new ActivitySortpage (
                activity.getActivityId(),
                activity.getTitle(),
                activity.getActor(),
                activity.getTimescale(),
                activity.getVenue(),
                activity.getActivityIcon(),
                actitems
        );
    }

    @Override
    public Boolean add(String activity) {
        System.out.println(activity);
        activity=activity.substring(1,activity.length()-1);
        String[] arr = activity.split(",");
        System.out.println(Arrays.toString(arr));
        int webcnt=Integer.parseInt(arr[0]);
        int daycnt=Integer.parseInt(arr[1]);
        int classcnt=Integer.parseInt(arr[2]);

        Activity savedActivity=activityDao.add(arr[3].substring(1,arr[3].length()-1),arr[4].substring(1,arr[4].length()-1),arr[5].substring(1,arr[5].length()-1),
                arr[6].substring(1,arr[6].length()-1),arr[7].substring(1,arr[7].length()-1));
        int activityId=savedActivity.getActivityId();
        int number=daycnt*classcnt+daycnt;

        for(int i=0;i<webcnt;++i){
            //website
            int basic=8+i*(number+1);
            Actitem savedActitem=actitemDao.add(activityId,arr[basic].substring(1,arr[basic].length()-1));
            //date
            basic+=1;

            int actitemId=savedActitem.getActitemId();
            List<JSONObject> CLASS;
            List<JSONObject> prices=new ArrayList<>();
            JSONObject clas;

            for(int k=0;k<daycnt;++k) {
                //date
                if(k!=0)basic+=classcnt+1;
                CLASS=new ArrayList<>();
                String date=arr[basic].substring(1,arr[basic].length()-1);

                for (int j = 0; j < classcnt; ++j) {
                    String classPrice = "{price:" + arr[basic+1+j] + ",num:100}";
                    clas = JSON.parseObject(classPrice);
                    CLASS.add(clas);
                }
                JSONObject day = new JSONObject();
                day.put("time", date);
                day.put("classcnt", classcnt);
                day.put("class", CLASS);
                prices.add(day);
            }
//            JSONObject actitemMongo=new JSONObject();
//            actitemMongo.put("actitemid",actitemId);
//            actitemMongo.put("timecnt",daycnt*classcnt);
//            actitemMongo.put("prices",prices);
//            System.out.println(actitemMongo.toString());
//            List<JSONObject> tmp=new LinkedList<>();
//            tmp.add(actitemMongo);
            System.out.println("!!!!");
            System.out.println(prices.toString());
            actitemDao.insertActitemInMongo(actitemId,prices);
        }
        return true;
    }


    @Override
    public List<ActivitySortpage> findActivityByCategory(CategoryQuery categoryQuery) {
        if (categoryQuery.getType().equals("category")) {
            List<Integer> activities = activityDao.findActivityByCategory(categoryQuery.getName());
            List<ActivitySortpage> activitySortpages = new ArrayList<ActivitySortpage>();
            for (Integer activity : activities)
                activitySortpages.add(findActivityAndActitem(activity));
            return activitySortpages;
        }
        else if (categoryQuery.getType().equals("subcategory")) {
            List<Integer> activities = activityDao.findActivityBySubcategory(categoryQuery.getName());
            List<ActivitySortpage> activitySortpages = new ArrayList<ActivitySortpage>();
            for (Integer activity : activities)
                activitySortpages.add(findActivityAndActitem(activity));
            System.out.println(activitySortpages);
            return activitySortpages;
        }
        else return null;
    }
}
