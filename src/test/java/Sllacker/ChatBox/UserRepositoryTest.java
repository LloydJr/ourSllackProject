package Sllacker.ChatBox;

import static org.assertj.core.api.Assertions.assertThat;

import Sllacker.ChatBox.models.User;
import Sllacker.ChatBox.repositories.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class UserRepositoryTest {


    @Autowired
    private UserRepository userRepo;

    @Autowired
    private TestEntityManager testEntityManager;


    @Test
    public void testCreateUser() {
        User user = new User();

        user.setUserName("frankie12");
        user.setPassword("Frank1");

        User savedUser = userRepo.save(user); // saves the user object to the database

        User existUser = testEntityManager.find(User.class, savedUser.getUserID());

        assertThat(existUser.getUserName()).isEqualTo(user.getUserName());
    }

    @Test
    public void testCreateUser_Bob() {
        User user = new User();

        user.setUserName("Bobby12");
        user.setPassword("GameMan");

        User savedUser = userRepo.save(user); // saves the user object to the database

        User existUser = testEntityManager.find(User.class, savedUser.getUserID());

        assertThat(existUser.getUserName()).isEqualTo(user.getUserName());
    }


    @Test
    public void testCreate_Test() {
        User user = new User();

        user.setUserName("Test");
        user.setPassword("Monkeyrun");

        User saveUser = userRepo.save(user);

        User existUser = testEntityManager.find(User.class, saveUser.getUserID());

        assertThat(existUser.getUserName()).isEqualTo(user.getUserName());

    }


    @Test
    public void testDelete_Test() {

        User user = userRepo.findByUsername("Test2");

        userRepo.delete(user);

        assertThat(userRepo.findByUsername("Test2")).isNull();

    }


    @Test
    public void testUpdate_Test() {

        User user = userRepo.findByUsername("Test");

        user.setUserName("Test2");

        User savedUser = userRepo.save(user);

        User existUser = testEntityManager.find(User.class, savedUser.getUserID());

        assertThat(existUser.getUserName()).isEqualTo(user.getUserName());

    }

}
