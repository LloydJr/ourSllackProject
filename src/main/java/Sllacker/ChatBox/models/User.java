package Sllacker.ChatBox.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "user")
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "id", nullable = false)
   private Long userID;
   private String userName;
   private String password;


   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
   private List<Message> messages = new ArrayList<>();

   @ManyToOne
   @JoinColumn(name = "channel")
   private Channel channel;

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
}