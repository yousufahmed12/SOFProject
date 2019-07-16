package com.clicksourcesof.jpa;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.clicksourcesof.model.BadgeModel;
@Repository
public interface BadgeRepository extends MongoRepository<BadgeModel, Integer> {


}