package com.sof.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sof.Services.SofService;
import com.sof.model.Message;
import com.sof.model.StackCandidate;

// Put Status code

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class SofRestController {

	@Autowired()
	SofService service;

	// test
	@GetMapping("/foo")
	public ResponseEntity<StackCandidate> work() {
		try {
		int a[] = { 1, 2, 3 };
		String answers[] = { "Link1", "Link2" };
		String comments[] = { "CommentLink1", "CommentLink2" };

		StackCandidate can = new StackCandidate("327", a, answers, comments);
		return ResponseEntity.ok(can);
		}
		catch(Exception e)
		{
			StackCandidate can2 = new StackCandidate(null, null, null, null);
			 return new ResponseEntity<>(can2, HttpStatus.BAD_REQUEST);
		}
	}

	// Get all candidates
	/**
	 * Method that retrieve all list the candidates
	 */
	@GetMapping("/candidates")
	public  ResponseEntity<List<StackCandidate>> getAllCandidates() {
		try {
		 return ResponseEntity.ok(service.findAll());
		}
		catch(Exception e)
		{
			List<StackCandidate> li = new ArrayList<>();
			return  new ResponseEntity<>(li, HttpStatus.BAD_REQUEST);
		}
	}

	// Get candidate by StackId
	/**
	 * Method that retrieve per candidate ID
	 */
	@GetMapping("/candidate/{id}")
	public ResponseEntity<StackCandidate> getCandidateByStackId(@PathVariable String id) {
		try {
		return ResponseEntity.ok(service.findByStackId(id));
		}
		catch(Exception e)
		{
			StackCandidate can2 = new StackCandidate(null, null, null, null);
			 return new ResponseEntity<>(can2, HttpStatus.BAD_REQUEST);
		}
	}

	// Update candidate by StackId
	/**
	 * Method that update Candidate ID which then also save the candidate info by ID
	 */
	@PutMapping("/candidate/{id}")
	public ResponseEntity<Message> updateCandidateByStackId(@RequestBody StackCandidate candidate, @PathVariable String id) {
		StackCandidate temp = service.findByStackId(id);
		if (temp == null)
			 return new ResponseEntity<>(new Message("Update unsuccessful" + id), HttpStatus.BAD_REQUEST);
		else {
			candidate.setId(temp.getId());
			service.save(candidate);
		}
		return ResponseEntity.ok(new Message("Update candidate: " + id));
	}

	// Post/Add Candidate
	/**
	 * Method that that check to display success message when save is working
	 */
	@PostMapping("/candidate")
	public ResponseEntity<Message> postBadge(@RequestBody StackCandidate candidate) {
		try {
		StackCandidate temp = service.findByStackId(candidate.getStackId());
		if (temp == null)
			service.save(candidate);
		else {
			candidate.setId(temp.getId());
			service.save(candidate);
		}

		return ResponseEntity.ok(new Message("Successfully added :)"));
		}
		catch(Exception e)
		{
			return new ResponseEntity<>(new Message("Unsuccessfully added"), HttpStatus.BAD_REQUEST);
		}

	}

}
