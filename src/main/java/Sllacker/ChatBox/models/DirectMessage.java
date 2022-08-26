package Sllacker.ChatBox.models;

import javax.persistence.*;

@Entity
@Table(name = "Direct_Message")
public class DirectMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "user_id", nullable = false)
    private Long userId;
    @OneToOne(cascade = CascadeType.ALL)
    @Column(name = "messages_id", nullable = false)
    private Long messagesId;


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getMessagesId() {
        return messagesId;
    }

    public void setMessagesId(Long messagesId) {
        this.messagesId = messagesId;
    }
}
