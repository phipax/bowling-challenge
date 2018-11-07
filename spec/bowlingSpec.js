'use strict'
describe('Bowling',function(){
 var game;

 beforeEach(function(){
 	game = new Bowling();
 });

 describe('Starts with 1 Frame - ',function(){
 	it('One roll',function(){
	 	game.addRoll(3);
	 	expect(game.frame_score).toEqual(3);
	 //	expect(game.strike).toEqual(false);
	 });

	it('Two rolls (no strike or spare)',function(){
	 	game.addRoll(3);
	 	game.addRoll(6);
	 	expect(game.frame_score).toEqual(9);
	 //	expect(game.strike).toEqual(false);
	 //	expect(game.spare).toEqual(false);
	 });

	it('Spare only',function(){
	 	game.addRoll(3);
	 	game.addRoll(7);
	 	expect(game.frame_score).toEqual(10);
	 //	expect(game.strike).toEqual(false);
	 //	expect(game.spare).toEqual(true);
	 });

	it('Strike Only',function(){
	 	game.addRoll(10);
	 	expect(game.frame_score).toEqual(10);
	 //	expect(game.strike).toEqual(true);
	 //	expect(game.spare).toEqual(false);
	 });
 });
	
 describe('Add second Frame - ',function(){
 	it('One roll (No Spare or Strike)',function(){
 		game.addRoll(3);
 		game.addRoll(5);
 		game.addFrame();
 		game.addRoll(7);
 		expect(game.frame_score).toEqual(7);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
 	});

	it('Two roll (No Spare or Strike)',function(){
 		game.addRoll(3);
 		game.addRoll(5);
 		game.addFrame();
 		game.addRoll(7);
 		game.addRoll(2);
 		expect(game.frame_score).toEqual(9);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
	 });

	it('One roll (Strike)',function(){
 		game.addRoll(10);
 		game.addFrame();
 		game.addRoll(7);
 		game.addRoll(3);
 		game.addFrame();
 		game.addRoll(5);
 		game.addRoll(4);
 		game.addFrame();
 		expect(game._frames.F2.score).toEqual(10);
 		expect(game._frames.F1.score).toEqual(20);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
	 });

	it('One roll (Strike)',function(){
 		game.addRoll(10);
 		game.addFrame();
 		game.addRoll(5);
 		game.addRoll(3);
 		game.addFrame();
 		game.addRoll(5);
 		game.addRoll(4);
 		game.addFrame();
 		expect(game._frames.F2.score).toEqual(8);
 		expect(game._frames.F1.score).toEqual(18);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
	 });

	it('One roll (Strike)',function(){
 		game.addRoll(10);
 		game.addFrame();
 		game.addRoll(5);
 		game.addRoll(3);
 		game.addFrame();
 		game.addRoll(5);
 		game.addRoll(4);
 		game.addFrame();
 		expect(game._frames.F2.score).toEqual(8);
 		expect(game._frames.F1.score).toEqual(18);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
	 });

	it('One roll (Strike)',function(){
 		game.addRoll(10);
 		game.addFrame();
 		game.addRoll(10);
 		game.addFrame();
 		game.addRoll(5);
 		game.addRoll(4);
 		game.addFrame();
 		expect(game._frames.F2.score).toEqual(10);
 		expect(game._frames.F1.score).toEqual(20);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
	 });

	it('One roll (Spare)',function(){
 		game.addRoll(7);
 		game.addRoll(3);
 		game.addFrame();
 		game.addRoll(6);
 		game.addRoll(4);
 		game.addFrame();
 		game.addRoll(3);
 		game.addRoll(4);
 		game.addFrame();
 		expect(game._frames.F2.score).toEqual(10);
 		expect(game._frames.F1.score).toEqual(16);
 	//	expect(game.strike).toEqual(false);
 	//	expect(game.spare).toEqual(false);
	 });

 });

});