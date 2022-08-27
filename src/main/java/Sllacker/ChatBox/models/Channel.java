package Sllacker.ChatBox.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Channel {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long ChannelID;
   private Long UserID;
   private Long MessageID;

   private String ChannelName;

   @ManyToMany
   @JoinTable(name = "channel_users",
           joinColumns = @JoinColumn(name = "channel_userid"))
   private List<User> channel_users = new ArrayList<>();



   public Channel(){}

   public Channel(Long channelID, Long userID, Long messageID, String channelName) {
      ChannelID = channelID;
      UserID = userID;
      MessageID = messageID;
      ChannelName = channelName;
   }

   public Long getChannelID() {return ChannelID;}
   public Long setChannelID() {return ChannelID;}
   
   public Long getUserID() {return UserID;}
   public void setUserID(Long UserID) {this.UserID = UserID;}

   public Long getMessageID() {return MessageID;}
   public void setMessageID(Long MessageID) {this.MessageID = MessageID;}

   public String getChannelName() {return ChannelName;}

   public void setChannelName(String channelName) {ChannelName = channelName;}

   public List<User> getChannel_users() {
      return channel_users;
   }

   public void setChannel_users(List<User> channel_users) {
      this.channel_users = channel_users;
   }


    
}
