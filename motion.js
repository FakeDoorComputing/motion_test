/*locOrientation = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation.lock;
locOrientation('portrait');*/
window.addEventListener("deviceorientation", get_orientation, true);
var sen_y, sen_z, st_y, st_z, start=true;

function get_orientation(event){
  sen_y=event.beta;
  sen_z=event.gamma;
  if(start){
    st_y=sen_y;
    st_z=sen_z;
    $("#y_start").text("y start = "+st_y);
    $("#z_start").text("z start = "+st_z);
    start=false;
  }
  $("#y_val").text(st_y-sen_y);
  $("#z_val").text(st_z-sen_z);
}
