package com.oligei.ticket_gathering.service;

import com.alibaba.fastjson.JSONObject;
import com.oligei.ticket_gathering.entity.mysql.Activity;
import org.apdplat.word.segmentation.Word;


import java.util.List;

public interface ActivityService {

    List<JSONObject> search(String value);
    JSONObject findActivityAndActitem(Integer id);

}
