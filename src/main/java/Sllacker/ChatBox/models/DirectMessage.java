package Sllacker.ChatBox.models;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@dmId")

@Table(name = "Direct_Message")
public class DirectMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", nullable = false)
    private Long userId;
    @Column(name = "direct_message_name")
    private String directMessageName;
    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name = "messageId")
    private List<Message> messageList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST,
                    CascadeType.MERGE},
            mappedBy = "directMessages")
    private List<User> userList = new ArrayList<>();
    public Long getUserId() {
        return userId;
    }

    public DirectMessage(){};

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Message> getListMessage() {
        return messageList;
    }

    public void setListMessage(List<Message> listUser) {
        this.messageList = listUser;
    }

    public String getDirectMessageName() {
        return directMessageName;
    }

    public void setDirectMessageName(String directMessageName) {
        this.directMessageName = directMessageName;
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }

    public List<User> getUserList() {
        return userList;
    }

    public void setUserList(List<User> userList) {
        this.userList = userList;
    }
}
