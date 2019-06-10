package com.sistemaecommerce.resource;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sistemaecommerce.domain.Login;

@RestController
@RequestMapping(value="/login")
@CrossOrigin(origins = "http://localhost:4200")
public class LoginResource {
	
	@RequestMapping(method=RequestMethod.POST)
	public List<Login> login() {

		Login login1 = new Login(1, "user@email.com", "123456");
		Login login2 = new Login(2, "teste@email.com", "123456");
		
		List<Login> login = new ArrayList<>();
		login.add(login1);
		login.add(login2);
		
		return login;
	}
	
}