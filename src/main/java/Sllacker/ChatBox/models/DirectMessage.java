package Sllacker.ChatBox.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Direct_Message")
public class DirectMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    @Column(name = "user_id", nullable = false)
    private Long userId;
    @OneToMany(cascade=CascadeType.ALL)
    @JoinColumn(name = "messageId")
    private List<Message> messageList = new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.PERSIST,
                    CascadeType.MERGE},
            mappedBy = "users")
    private List<User> userList = new ArrayList<>();
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public List<Message> getListMessage() {
        return messageList;
    }

    public void setListMessage(List<Message> listUser) {
        this.messageList = listUser;
    }

}
