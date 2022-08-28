package Sllacker.ChatBox.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Channel {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long ChannelID;
   private String ChannelName;

   @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL)
   private List<User> channel_users = new ArrayList<>();



   public Channel(){}

   public Channel(Long channelID, String channelName) {
      ChannelID = channelID;

      ChannelName = channelName;
   }

   public Long getChannelID() {return ChannelID;}
   public Long setChannelID() {return ChannelID;}
   

   public String getChannelName() {return ChannelName;}

   public void setChannelName(String channelName) {ChannelName = channelName;}

   @JsonManagedReference
   public List<User> getChannel_users() {
      return channel_users;
   }

   public void setChannel_users(List<User> channel_users) {
      this.channel_users = channel_users;
      for (User c: channel_users){
         c.setChannel(this);}
   }


    
}
