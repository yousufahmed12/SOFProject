package com.sof.model;

import java.util.Arrays;

import org.springframework.data.annotation.Id;

public class StackCandidate {

	@Id
	private String id;

	private String stackId;

	private int[] badge;

	private String[] answersLinks;

	private String[] commentsLinks;

	public StackCandidate(String stackId, int[] badge, String[] answersLinks, String[] commentsLinks) {
		super();
		this.stackId = stackId;
		this.badge = badge;
		this.answersLinks = answersLinks;
		this.commentsLinks = commentsLinks;
	}

	/**
	 * Method that retrieve stackCandiate ID object
	 */
	public String getId() {
		return id;
	}

	/**
	 * Method that set stackCandidate by ID
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * Method that retrieve stack-overflow ID
	 */
	public String getStackId() {
		return stackId;
	}

	/**
	 * Method that set stack-overflow candidate ID Object
	 */
	public void setStackId(String stackId) {
		this.stackId = stackId;
	}

	/**
	 * Method that retrieve all the badges
	 */
	public int[] getBadge() {
		return badge;
	}

	/**
	 * Method that set the badges
	 */
	public void setBadge(int[] badge) {
		this.badge = badge;
	}

	/**
	 * Method that retrieve answer links
	 */
	public String[] getAnswersLinks() {
		return answersLinks;
	}

	/**
	 * Method that set answers links
	 */
	public void setAnswersLinks(String[] answersLinks) {
		this.answersLinks = answersLinks;
	}

	/**
	 * Method that retrieve comment links
	 */
	public String[] getCommentsLinks() {
		return commentsLinks;
	}

	/**
	 * Method that set comment links
	 */
	public void setCommentsLinks(String[] commentsLinks) {
		this.commentsLinks = commentsLinks;
	}

	/**
	 * Method that display all the info of teh stack-candidates
	 */
	@Override
	public String toString() {
		return "StackCandidate [id=" + id + ", stackId=" + stackId + ", badge=" + Arrays.toString(badge)
				+ ", answersLinks=" + Arrays.toString(answersLinks) + ", commentsLinks="
				+ Arrays.toString(commentsLinks) + "]";
	}

}