package Sllacker.ChatBox.models;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString 
public class Message {


    private Long senderId;
    private Long receiverId;
    private String message;
    private String date;
    private Status status;
}

