package Sllacker.ChatBox.configuration;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordEncoder {

    public static void main (String[] args){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String rawPassword = "8989";
        String encodedPassword = encoder.encode(rawPassword);

        System.out.println(encodedPassword);
    }
}
