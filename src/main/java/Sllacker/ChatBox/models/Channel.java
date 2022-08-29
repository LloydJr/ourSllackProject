package Sllacker.ChatBox.models;

import com.fasterxml.jackson.annotation.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@chid")
@Entity
public class Channel {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long ChannelID;
   private String ChannelName;



   @ManyToMany(fetch = FetchType.LAZY,
           cascade = {CascadeType.PERSIST,
                   CascadeType.MERGE},
           mappedBy = "channels")
   private List<User> channel_users = new ArrayList<>();

   @OneToMany(mappedBy = "channel", cascade = CascadeType.ALL)
   private List<Message> message = new ArrayList<>();





   public Channel(){}

   public Channel(Long channelID, String channelName) {
      ChannelID = channelID;

      ChannelName = channelName;
   }

   public Long getChannelID() {return ChannelID;}
   public Long setChannelID() {return ChannelID;}


   public String getChannelName() {return ChannelName;}

   public void setChannelName(String channelName) {ChannelName = channelName;}

   public List<User> getChannel_users() {
      return channel_users;
   }

   public void setChannel_users(List<User> channel_users) {
      this.channel_users = channel_users;
   }

   public List<Message> getMessage() {
      return message;
   }

   public void setMessage(List<Message> message) {
      this.message = message;
   }
}