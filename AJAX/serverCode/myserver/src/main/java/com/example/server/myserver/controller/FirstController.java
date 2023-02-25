package com.example.server.myserver.controller;

import com.example.server.myserver.bean.Data1;
import com.example.server.myserver.bean.Result;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@Slf4j
@RestController
public class FirstController {

    @ResponseBody
    @RequestMapping("/server")
    public String test1(){
        return "你好";
    }

    @ResponseBody
    @RequestMapping("/json-server")
    public Result test2(){
        return new Result();
    }

    @ResponseBody
    @RequestMapping("/ie")
    public String test3(){
        return "HELLO IE";
    }

    //延时响应
    @ResponseBody
    @RequestMapping("/delay")
    public String test4() throws InterruptedException {
        Thread.sleep(3000);
        return "延时响应";
    }

    //检测用户名是否存在
    @ResponseBody
    @RequestMapping("/check-username")
    public String test5() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        Data1 data1 = new Data1();
        data1.setExist(1);
        data1.setMsg("用户名已经存在");
        //把对象转换为JSON格式字符串
        String str = objectMapper.writeValueAsString(data1);
        log.info(str);
        return "handle(" + str + ")";
    }
}
