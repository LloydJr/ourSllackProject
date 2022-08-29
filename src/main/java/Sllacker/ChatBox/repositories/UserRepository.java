package Sllacker.ChatBox.repositories;

import Sllacker.ChatBox.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
@Query("SELECT u FROM User u WHERE u.userName = ?1")
User findByUsername(String userName);

}