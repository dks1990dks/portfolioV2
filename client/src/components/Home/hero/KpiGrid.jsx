const data = [
  {
    title: "Completed Projects",
    value: "4",
  },
  {
    title: "In Development",
    value: "3",
  },
  {
    title: "Business Applications",
    value: "7",
  },
  {
    title: "Development",
    value: "Full Stack",
  },
];

export default function KpiGrid() {

    return (

        <div className="grid grid-cols-2 gap-5">

            {data.map(item => (

                <div

                    key={item.title}

                    className="
          rounded-2xl
          border
          border-slate-700
          bg-white/5
          p-5"

                >

                    <p className="text-slate-400">

                        {item.title}

                    </p>

                    <h2 className="text-3xl font-bold text-white mt-2">

                        {item.value}

                    </h2>

                </div>

            ))}

        </div>

    )

}