package com.oligei.ticket_gathering.serviceimpl;


import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.dao.ActitemDao;
import com.oligei.ticket_gathering.dao.ActivityDao;
import com.oligei.ticket_gathering.entity.mysql.Actitem;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import com.oligei.ticket_gathering.service.ActivityService;
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
    public List<JSONObject> search(String value) {
        if(value==null || value.equals("")){
            List<JSONObject> activities=new LinkedList<>();
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

        List<JSONObject> activities=new LinkedList<>();
        int basic=0;
        if(n>2)basic=1;
        if(n>5)basic=2;
        if(n>10)basic=n-5;
        for(int i=idSet.size();i>basic;--i){
            for(int j=0;j<idSet.size();++j){
                if(cntArray[j]==i) {
                        JSONObject tmp = findActivityAndActitem(idArray[j]);
                        activities.add(tmp);
                }
            }
        }
        return activities;
    }

    @Override
    public JSONObject findActivityAndActitem(Integer id) {

        Activity activity;
        try{
            activity = activityDao.findOneById(id);
        }catch (javax.persistence.EntityNotFoundException e){
            return null;
        }
        if(activity==null) return null;
        List<Actitem> actitems=actitemDao.findAllByActivityId(id);

        List<JSONObject> objects=new LinkedList<>();
        for(int i=0;i<actitems.size();++i){
            JSONObject tmp=new JSONObject();
            tmp.put("website",actitems.get(i).getWebsite());
            tmp.put("price",actitems.get(i).getPrice());
            objects.add(tmp);
        }

        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("activityId", activity.getActivityId());
            jsonObject.put("title", activity.getTitle());
            jsonObject.put("actor", activity.getActor());
            jsonObject.put("timescale", activity.getTimescale());
            jsonObject.put("venue", activity.getVenue());
            jsonObject.put("activityIcon", activity.getActivityIcon());
            jsonObject.put("actitems", objects);
        }catch (javax.persistence.EntityNotFoundException e){
            return null;
        }

        return jsonObject;
    }

}
