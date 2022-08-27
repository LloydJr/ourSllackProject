package Sllacker.ChatBox.repositories;

import Sllacker.ChatBox.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository //if you look into the jpaRepo library you'll see it takes in two types, an object type and an id type
public interface MessageRepository extends JpaRepository<Message, Long> {

}
