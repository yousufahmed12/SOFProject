package com.sof.RestController;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
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
	@GetMapping("/")
	public StackCandidate work() {
		int a[] = { 1, 2, 3 };
		String answers[] = { "Link1", "Link2" };
		String comments[] = { "CommentLink1", "CommentLink2" };

		StackCandidate can = new StackCandidate("327", a, answers, comments);
		return can;
	}

	// Get all candidates
	/**
	 * Method that retrieve all list the candidates
	 */
	@GetMapping("/candidates")
	public List<StackCandidate> getAllCandidates() {
		return service.findAll();
	}

	// Get candidate by StackId
	/**
	 * Method that retrieve per candidate ID
	 */
	@GetMapping("/candidate/{id}")
	public StackCandidate getCandidateByStackId(@PathVariable String id) {
		return service.findByStackId(id);
	}

	// Update candidate by StackId
	/**
	 * Method that update Candidate ID which then also save the candidate info by ID
	 */
	@PutMapping("/candidate/{id}")
	public String updateCandidateByStackId(@RequestBody StackCandidate candidate, @PathVariable String id) {
		StackCandidate temp = service.findByStackId(id);
		if (temp == null)
			return "Stack candidate not found";
		else {
			candidate.setId(temp.getId());
			service.save(candidate);
		}
		return "Saved candidate: " + id;
	}

	// Post/Add Candidate
	/**
	 * Method that that check to display success message when save is working
	 */
	@PostMapping("/candidate")
	public ResponseEntity<Message> postBadge(@RequestBody StackCandidate candidate) {
		StackCandidate temp = service.findByStackId(candidate.getStackId());
		if (temp == null)
			service.save(candidate);
		else {
			candidate.setId(temp.getId());
			service.save(candidate);
		}

		return ResponseEntity.ok(new Message("Successfully added :)"));

	}

}
