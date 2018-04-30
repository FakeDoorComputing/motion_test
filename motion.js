locOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation.lock;
locOrientation('portrait');
window.addEventListener("deviceorientation", get_orientation, true);
var sen_x, sen_y, sen_z, sen_a;

function get_orientation(event){
  sen_x=event.alpha;
  sen_y=event.beta;
  sen_z=event.gamma;
  sen_a=event.absolute;
  $("#x_val").text(sen_x);
  $("#y_val").text(sen_y);
  $("#z_val").text(sen_z);
  $("#error").text(sen_a);

}
