package Sllacker.ChatBox.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ChatBox {
   @Id
   private Long ChannelID;
   private Long UserID;
   private Long MessageID;

   public ChatBox(){}

   public ChatBox(Long ChannelID, Long UserID, Long MessageID){
    this.ChannelID = ChannelID;
    this.UserID = UserID;
    this.MessageID = MessageID;
   }

   
   public Long getChannelID() {return ChannelID;}
   public Long setChannelID() {return ChannelID;}
   
   public Long getUserID() {return UserID;}
   public void setUserID(Long UserID) {this.UserID = UserID;}

   public Long getMessageID() {return MessageID;}
   public void setMessageID(Long MessageID) {this.MessageID = MessageID;}






    
}