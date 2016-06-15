err/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `EmployeeController.index()`
   */
  index: function (req, res) {
    console.log("iii");
    Employee.find(function(err, emps){
 
      if(err){
        console.log(err);
        return res.send(err,500);
      }
      console.log(emps);
      res.view({model:emps});
    });
  },


  /**
   * `EmployeeController.show()`
   */
  show: function (req, res) {
    var id=req.params['id'];
    Employee.findOne(id,function(err,emps){
      if(err){

        console.log(err);
        return res.send(err,500);
      }
      res.json({model:emps});
    });
  },


  /**
   * `EmployeeController.new()`
   */
  new: function (req, res) {
   res.view();
  },


  /**
   * `EmployeeController.create()`
   */
  create: function (req, res) {
   var params= _.extend(req.query || {},req.params || {},req.body || {});
   Employee.create(params,function(err, createemp){
   console.log("ppp");
    res.redirect('/emps');
    console.log("uuu");
  });
  },


  /**
   * `EmployeeController.edit()`
   */
  edit: function (req, res) {
   console.log("hi");
   var id=req.params['id'];
   Employee.findOne(id,function(err,emps){
    console.log('tt');
     if(err){
      console.log(err);
      return res.send(err,500)
    }
    console.log(emps);
    res.view({model:emps});
   });
  }, 


  /**
   * `EmployeeController.update()`
   */
  update: function (req, res) {
   console.log("ooo");
   var params = _.extend(req.query || {},req.params || {},req.body || {});
   var id=req.params['id'];
 Employee.update(id,params,function(err,employee){
    console.log("uuu");
    if(err){
      console.log(err);
      return res.send(err,500);
    }
    if(employee){
      return res.send("employee"+id+"is not there",404);
    }
    console.log(employee);
    res.redirect('/employee');
    });

  },


  /**
   * `EmployeeController.destroy()`
   */
  destroy: function (req, res) {
    var id=req.params['id'];
    Employee.findOne(id,function(err,emps){
     if(err){
      console.log(err);
      return res.send(err,500);
    }
    Employee.destroy(id,function(err,emps){
       if(err){
      console.log(err);
      return res.send(err,500);
       }
       res.redirect('/emps');
    });
  });
 }
};

