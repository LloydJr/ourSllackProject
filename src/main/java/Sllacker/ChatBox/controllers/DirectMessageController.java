package Sllacker.ChatBox.controllers;

import Sllacker.ChatBox.models.DirectMessage;
import Sllacker.ChatBox.services.DirectMessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/dm")
public class DirectMessageController {

    private DirectMessageService service;

    public DirectMessageController(DirectMessageService service) {
        this.service = service;
    }
    public ResponseEntity<Iterable<DirectMessage>> indexDm() {
        return new ResponseEntity<>(service.index(), HttpStatus.OK);
    }
    @GetMapping("/{message_id}")
    public ResponseEntity<Object> getDm(@PathVariable Long messageId) {
        return new ResponseEntity<>(service.getDirectMessage(messageId), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<Object> postDm(@RequestBody DirectMessage dm) {
        return new ResponseEntity<>(service.postDirectMessage(dm), HttpStatus.OK);
    }
    @PutMapping("/{message_id}")
    public ResponseEntity<Object> putDm(@PathVariable Long messageId, @RequestBody DirectMessage dm) {
        return new ResponseEntity<>(service.putDirectMessage(messageId, dm), HttpStatus.OK);
    }
    @DeleteMapping("/{message_id}")
    public ResponseEntity<Boolean> deleteDm(@PathVariable Long messageId) {
        return new ResponseEntity<>(service.delete(messageId), HttpStatus.OK);
    }
}
