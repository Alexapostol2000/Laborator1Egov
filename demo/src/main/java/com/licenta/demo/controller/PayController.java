package com.licenta.demo.controller;

import com.licenta.demo.model.Pay;
import com.licenta.demo.repository.PayRepository;
import com.licenta.demo.service.PayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class PayController {
    @Autowired
    private PayService payService;
    private PayRepository payRepository;
    @PostMapping("/plata")
    public ResponseEntity<Pay> register(@RequestBody Pay pay) {
        Pay registeredPay = payService.processRegister(pay);
        return ResponseEntity.ok(registeredPay);
    }
}
