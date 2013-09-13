var exec = require('child_process').exec;

exports.index = function(req, res){
	console.log(req.body)
	res.render('console')
};

exports.cmd = function(req, res){
 
	exec(req.body.cmd,

	  function (error, stdout, stderr) {
  
	    if ( stderr.toString().length > 0 ){

	    	res.send({data:stderr})

	    } else if ( stdout.toString().length > 0 ) {

	    	res.send({data:stdout})

	    }  else if (error !== null) {
	      console.log('exec error: ' + error);
	      res.send({data:error})
	    }

	});


	

}
