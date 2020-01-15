<script>
document.addEventListener("DOMContentLoaded",onkeyup= function add(){
var a,b,c,z;
a=Number(document.getElementById("text1").value);
b=Number(document.getElementById("text2").value);
c=Number(document.getElementById("text3").value); 
z= b*c/(2*Math.sin(a*11/1260)); 
document.getElementById('text99').value = z.toFixed(2);
})
</script>
