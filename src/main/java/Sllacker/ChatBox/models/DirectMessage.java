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
//    @ManyToOne(cascade=CascadeType.ALL)
//    @JoinColumn(name = "userId")
//    private List<User> listUser = new ArrayList<>();

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

//    public List<User> getListUser() {
//        return listUser;
//    }
//
//    public void setListUser(List<User> listUser) {
//        this.listUser = listUser;
//    }

    /**
     * TODO Create an API, put message into userMessagingList
     *      TODO that particular message.
     *
     * TODO ManyToOne multiple users can get one message
     *      TODO -> Dm Entity will hold on to a list of users and tied to a message
     * */
}
