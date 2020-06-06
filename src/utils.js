// https://stackoverflow.com/questions/42812861/three-js-pivot-point
export function rotateAboutPoint(obj, point, axis, theta, pointIsWorld) {
  pointIsWorld = pointIsWorld === undefined ? false : pointIsWorld

  if (pointIsWorld) {
    obj.parent.localToWorld(obj.position) // compensate for world coordinate
  }

  obj.position.sub(point) // remove the offset
  obj.position.applyAxisAngle(axis, theta) // rotate the POSITION
  obj.position.add(point) // re-add the offset

  if (pointIsWorld) {
    obj.parent.worldToLocal(obj.position) // undo world coordinates compensation
  }

  obj.rotateOnAxis(axis, theta) // rotate the OBJECT
}

// https://github.com/d3/d3-ease/blob/master/src/poly.js#L27
export const polyInOut = (function custom(e) {
  e = +e

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
  }

  polyInOut.exponent = custom

  return polyInOut
})(3)
