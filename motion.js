let sensor=new Accelerometer();
var sen_x, sen_y, sen_z;
sensor.start();

sensor.onreading = () => {
    sen_x=("Acceleration along X-axis: " + sensor.x);
    sen_y=("Acceleration along Y-axis: " + sensor.y);
    sen_z=("Acceleration along Z-axis: " + sensor.z);
    $("x_val").text(sen_x);
    $("y_val").text(sen_y);
    $("z_val").text(sen_z);
}

sensor.onerror = event => console.log(event.error.name, event.error.message);
