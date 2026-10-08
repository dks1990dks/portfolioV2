export default function Badge({

children

}){

return(

<span

className="
inline-flex
items-center
rounded-full
bg-cyan-500/10
border
border-cyan-500
px-5
py-2
text-cyan-300
text-sm
font-medium"

>

{children}

</span>

);

}