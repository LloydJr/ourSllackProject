package Sllacker.ChatBox.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "user")
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "id", nullable = false, unique = true) //made id unique, i would like to do that for username as well
   private Long userID;
   @Column(nullable = false, unique = true)
   private String userName;
   @Column(nullable = false, length = 60)
   private String password;


   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
   private List<Message> messages = new ArrayList<>();


   @ManyToMany
   @JoinTable(name = "channels",
           joinColumns = {@JoinColumn(name = "user_id")},
           inverseJoinColumns = {@JoinColumn(name = "channel_id")}
   )
   private List<Channel> channels = new ArrayList<>();

   @JsonManagedReference
   public List<Message> getMessages() {
      return messages;

   }

   public void setMessages(List<Message> messages) {
      this.messages = messages;
      for(Message m: messages){
         m.setUser(this);
      }
   }

   public Long getUserID() {
      return userID;
   }

   public void setUserID(Long userID) {
      this.userID = userID;
   }

   public String getUserName() {
      return userName;
   }

   public void setUserName(String userName) {
      this.userName = userName;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

   public List<Channel> getChannels() {
      return channels;
   }

   public void setChannels(List<Channel> channels) {
      this.channels = channels;
   }
}
