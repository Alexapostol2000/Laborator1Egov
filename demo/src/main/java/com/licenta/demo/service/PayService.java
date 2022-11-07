package com.licenta.demo.service;

import com.licenta.demo.model.Pay;
import com.licenta.demo.repository.PayRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class PayService {
    @Autowired
    private PayRepository payRepository;

    public Pay processRegister(Pay pay) {
        payRepository.save(pay);
        return pay;
    }
}
