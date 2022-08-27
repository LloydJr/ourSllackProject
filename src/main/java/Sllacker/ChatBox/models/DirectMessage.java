package Sllacker.ChatBox.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Direct_Message")
public class DirectMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dmUserId", nullable = false)
    private Long dmUserId;
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "messages_id", nullable = true) /**The focus is here*/
    private Long messagesId;
    @JsonIgnore
    @OneToMany(mappedBy = "directMessage")
    private Set<Message> messageSet = new HashSet<>();


    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Long getDmUserId() {
        return dmUserId;
    }

    public void setDmUserId(Long dmUserId) {
        this.dmUserId = dmUserId;
    }

    public Long getMessagesId() {
        return messagesId;
    }

    public void setMessagesId(Long messagesId) {
        this.messagesId = messagesId;
    }

    public Set<Message> getMessageSet() {
        return messageSet;
    }

    public void setMessageSet(Set<Message> messageSet) {
        this.messageSet = messageSet;
    }
}
