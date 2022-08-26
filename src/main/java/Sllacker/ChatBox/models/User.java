package Sllacker.ChatBox.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "user")
public class User {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "id", nullable = false)
   private Long UserID;
   private String UserName;
   private String password;


   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
   private List<Message> messages = new ArrayList<>();

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
      return UserID;
   }

   public void setUserID(Long userID) {
      UserID = userID;
   }


}
