package Sllacker.ChatBox.models;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString 
public class Message {


    private Long senderUserId;
    private Long receiverUserId;
    private String message;
    private String date;
    private Status status;
}

