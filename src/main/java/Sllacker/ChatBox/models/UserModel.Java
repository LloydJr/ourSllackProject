package Sllacker.ChatBox.models;

import javax.persistence.Entity;
import javax.persistence.Id;
package Sllacker.ChatBox.models;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
   @Id
   private Long UserID;
   private Long ChannelID;
   private Long MessageID;
}