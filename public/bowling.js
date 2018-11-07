'use strict';

function Bowling(){
	this._frames = [];
	this._frame = [];
	this.frame_score = 0;
}

Bowling.prototype.addRoll = function(r){
	this.frame_score += r;
	if(r===10 && this._frame.length===0){
		this._frame.push(10,0,'st');
	} else {
		this._frame.push(r);
		this.frame_score === 10 ? this._frame.push('sp') : this._frame.push('na');
	}

	if(this._frame.length === 3) {
		this._frame.push(this.frame_score);
		this.addFrame();
	}
};

Bowling.prototype.addFrame = function(){
		if(this._frames.length === 10 && this._frames[this._frames.length-1][2] === 'na'){
			return;
		} else {
			this._frames.push(this._frame);
			this._frame = [];
			this.frame_score = 0;
		}
};

Bowling.prototype.adjustFrameScores = function(){
	for(var i=0;i<this._frames.length-1;i++){
		switch(this._frames[i][2]){
			case 'st':
					if(this._frames[i+1][2] === 'st'){
						this._frames[i][3] += (this._frames[i+1][0] + this._frames[i+2][0]);
					} else {
						this._frames[i][3] += (this._frames[i+1][0] + this._frames[i+1][1]);
					}
				break;
			case 'sp':
				this._frames[i][3] += this._frames[i+1][0];
				break;
			case 'na':
				break;
			}
	}
};