import * as THREE from "three";

function HelixCurve() {
  THREE.Curve.call(this);
}

HelixCurve.prototype = Object.create(THREE.Curve.prototype);
HelixCurve.prototype.constructor = HelixCurve;

HelixCurve.prototype.getPoint = function(t, optionalTarget) {
  var point = optionalTarget || new THREE.Vector3();

  var a = 0.1; // radius
  var b = 0.5; // height

  var t2 = (2 * Math.PI * t * b) / 0.15;

  var x = Math.cos(t2) * a;
  var y = Math.sin(t2) * a;
  var z = b * t;

  return point.set(x, y, z);
};

export { HelixCurve };
