package com.clicksourcesof.model;

public class Badge {
	
	private int bronze;
	private int silver;
	private int gold;
	
	Badge(){}
	
	public int getBronze() {
		return bronze;
	}
	public void setBronze(int bronze) {
		this.bronze = bronze;
	}
	public int getSilver() {
		return silver;
	}
	public void setSilver(int silver) {
		this.silver = silver;
	}
	public int getGold() {
		return gold;
	}
	public void setGold(int gold) {
		this.gold = gold;
	}

	@Override
	public String toString() {
		return "Badge [bronze=" + bronze + ", silver=" + silver + ", gold=" + gold + "]";
	}
	
	

}
