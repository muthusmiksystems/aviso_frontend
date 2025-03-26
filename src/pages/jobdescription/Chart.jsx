"use client"

import { Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { Calendar, MoreHorizontal, Settings } from "lucide-react"

export default function StatsCard() {
    const barData = [
        { month: "Jan", category1: 20000, category2: 30000, category3: 50000 },
        { month: "Feb", category1: 30000, category2: 40000, category3: 70000 },
        { month: "Mar", category1: 25000, category2: 35000, category3: 60000 },
        { month: "Apr", category1: 40000, category2: 45000, category3: 110000 },
        { month: "May", category1: 50000, category2: 50000, category3: 150000 },
        { month: "Jun", category1: 60000, category2: 60000, category3: 180000 },
    ]

    const pieData = [
        { name: "Completed", value: 46, fill: "#0ea5e9" },
        { name: "Remaining", value: 54, fill: "#e5e7eb" },
    ]

    const smallBarData = [
        { id: 1, value1: 10, value2: 15, value3: 5 },
        { id: 2, value1: 15, value2: 10, value3: 8 },
        { id: 3, value1: 12, value2: 8, value3: 10 },
        { id: 4, value1: 8, value2: 12, value3: 7 },
        { id: 5, value1: 10, value2: 10, value3: 9 },
    ]

    // Define colors directly
    const colors = {
        category1: "#0ea5e9", // bright blue
        category2: "#60a5fa", // medium blue
        category3: "#e5e7eb", // light gray
    }

    return (
        <div className="p-4 bg-white rounded-2xl shadow-lg space-y-6 w-full max-w-md">
            {/* Statistics Section */}
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">Relevant statistics</h2>
                    <MoreHorizontal className="text-gray-500 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-500 text-sm">Find a Job Fair Invitation and Attend to look for work</p>

                <div className="flex justify-between items-center mt-3">
                    <button className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1 rounded-lg text-sm">
                        <Calendar size={16} />
                        Jan - Jun
                    </button>
                </div>

                <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto h-48 mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={barData}
                            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                            barSize={20}
                            barGap={2}
                        >
                            <Bar dataKey="category1" stackId="stack" fill={colors.category1} radius={[0, 0, 0, 0]} />
                            <Bar dataKey="category2" stackId="stack" fill={colors.category2} radius={[0, 0, 0, 0]} />
                            <Bar dataKey="category3" stackId="stack" fill={colors.category3} radius={[0, 0, 4, 4]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>

            {/* Infographics Section */}
            <div>
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-lg">Infographics</h2>
                    <Settings className="text-gray-500 cursor-pointer" size={20} />
                </div>
                <p className="text-gray-500 text-sm">Find a Job Fair Invitation and Attend to look for work</p>

                <div className="flex items-center justify-between mt-4">
                    <div className="h-20 w-20 relative">
                        <PieChart width={80} height={80}>
                            <Pie
                                data={pieData}
                                cx={40}
                                cy={40}
                                innerRadius={30}
                                outerRadius={40}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                        </PieChart>
                        <div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <p className="text-lg font-semibold">46</p>
                                    <p className="text-xs font-semibold">%</p>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="text-gray-500 text-sm">6 Certificates</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-12 w-24">
                        <BarChart
                            width={100}
                            height={48}
                            data={smallBarData}
                            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                            barSize={4}
                            barGap={1}
                        >
                            <Bar dataKey="value1" stackId="stack" fill={colors.category1} radius={[0, 0, 0, 0]} />
                            <Bar dataKey="value2" stackId="stack" fill={colors.category2} radius={[0, 0, 0, 0]} />
                            <Bar dataKey="value3" stackId="stack" fill={colors.category3} radius={[0, 0, 2, 2]} />
                        </BarChart>
                        <div className="text-center">
                            <p className="text-gray-500 text-sm">6 Certificates</p>
                        </div>
                    </div>



                </div>

                <div className="mt-10 flex items-center justify-between">
                    <p className="text-red-500 text-sm flex items-center">
                        <span className="mr-1">▼</span> 2.45%
                    </p>


                    <MoreHorizontal className="text-gray-500 cursor-pointer" size={20} />
                </div>
            </div>
        </div>
    )
}

