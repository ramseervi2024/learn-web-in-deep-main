import React, { useState } from 'react';
import { Search } from 'lucide-react';

const FormulaTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const formulas = [
    { id: 1, concept: "Area of Circle", formula: "A = πr²", code: "area = 3.14 * r**2", input: "r=5", output: "78.5" },
    { id: 2, concept: "Circumference", formula: "C = 2πr", code: "circ = 2 * 3.14 * r", input: "r=3", output: "18.84" },
    { id: 3, concept: "Area of Rectangle", formula: "A = l × w", code: "area = l * w", input: "l=4, w=6", output: "24" },
    { id: 4, concept: "Perimeter Rectangle", formula: "P = 2(l+w)", code: "per = 2*(l+w)", input: "l=5, w=3", output: "16" },
    { id: 5, concept: "Area of Triangle", formula: "A = ½bh", code: "area = 0.5*b*h", input: "b=6, h=4", output: "12" },
    { id: 6, concept: "Pythagorean Theorem", formula: "a²+b²=c²", code: "c = (a**2+b**2)**0.5", input: "a=3, b=4", output: "5.0" },
    { id: 7, concept: "Volume of Cube", formula: "V = s³", code: "vol = s**3", input: "s=3", output: "27" },
    { id: 8, concept: "Volume of Cylinder", formula: "V = πr²h", code: "vol = 3.14*r**2*h", input: "r=2, h=5", output: "62.8" },
    { id: 9, concept: "Volume of Sphere", formula: "V = 4/3πr³", code: "vol = 4/3*3.14*r**3", input: "r=3", output: "113.04" },
    { id: 10, concept: "Simple Interest", formula: "SI = PRT/100", code: "si = p*r*t/100", input: "p=1000, r=5, t=2", output: "100" },
    { id: 11, concept: "Compound Interest", formula: "A = P(1+r/n)^nt", code: "a = p*(1+r/n)**(n*t)", input: "p=1000, r=0.05, n=1, t=2", output: "1102.5" },
    { id: 12, concept: "Speed", formula: "S = D/T", code: "speed = d/t", input: "d=100, t=5", output: "20" },
    { id: 13, concept: "Distance", formula: "D = S×T", code: "dist = s*t", input: "s=60, t=2", output: "120" },
    { id: 14, concept: "Time", formula: "T = D/S", code: "time = d/s", input: "d=150, s=50", output: "3" },
    { id: 15, concept: "Percentage", formula: "P = (V/T)×100", code: "perc = (v/t)*100", input: "v=25, t=200", output: "12.5" },
    { id: 16, concept: "Profit", formula: "P = SP - CP", code: "profit = sp - cp", input: "sp=150, cp=100", output: "50" },
    { id: 17, concept: "Loss", formula: "L = CP - SP", code: "loss = cp - sp", input: "cp=200, sp=150", output: "50" },
    { id: 18, concept: "Profit %", formula: "P% = (P/CP)×100", code: "pp = (p/cp)*100", input: "p=50, cp=100", output: "50.0" },
    { id: 19, concept: "Loss %", formula: "L% = (L/CP)×100", code: "lp = (l/cp)*100", input: "l=20, cp=100", output: "20.0" },
    { id: 20, concept: "Discount", formula: "D = MP - SP", code: "disc = mp - sp", input: "mp=500, sp=400", output: "100" },
    { id: 21, concept: "Celsius to Fahrenheit", formula: "F = (9/5)C + 32", code: "f = (9/5)*c + 32", input: "c=25", output: "77.0" },
    { id: 22, concept: "Fahrenheit to Celsius", formula: "C = (F-32)×5/9", code: "c = (f-32)*5/9", input: "f=77", output: "25.0" },
    { id: 23, concept: "Average", formula: "Avg = Sum/N", code: "avg = sum(lst)/len(lst)", input: "[10,20,30]", output: "20.0" },
    { id: 24, concept: "Quadratic Formula", formula: "x = (-b±√(b²-4ac))/2a", code: "x = (-b+(b**2-4*a*c)**0.5)/(2*a)", input: "a=1, b=-3, c=2", output: "2.0" },
    { id: 25, concept: "Slope", formula: "m = (y₂-y₁)/(x₂-x₁)", code: "m = (y2-y1)/(x2-x1)", input: "x1=1, y1=2, x2=3, y2=6", output: "2.0" },
    { id: 26, concept: "Distance 2D", formula: "d = √((x₂-x₁)²+(y₂-y₁)²)", code: "d = ((x2-x1)**2+(y2-y1)**2)**0.5", input: "x1=0, y1=0, x2=3, y2=4", output: "5.0" },
    { id: 27, concept: "Midpoint", formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)", code: "mx = (x1+x2)/2", input: "x1=2, x2=8", output: "5.0" },
    { id: 28, concept: "BMI", formula: "BMI = w/h²", code: "bmi = w/(h**2)", input: "w=70, h=1.75", output: "22.86" },
    { id: 29, concept: "Density", formula: "ρ = m/V", code: "rho = m/v", input: "m=100, v=50", output: "2.0" },
    { id: 30, concept: "Force", formula: "F = ma", code: "f = m*a", input: "m=10, a=9.8", output: "98.0" },
    { id: 31, concept: "Work", formula: "W = Fd", code: "w = f*d", input: "f=50, d=10", output: "500" },
    { id: 32, concept: "Power", formula: "P = W/t", code: "p = w/t", input: "w=1000, t=5", output: "200.0" },
    { id: 33, concept: "Kinetic Energy", formula: "KE = ½mv²", code: "ke = 0.5*m*v**2", input: "m=2, v=10", output: "100.0" },
    { id: 34, concept: "Potential Energy", formula: "PE = mgh", code: "pe = m*g*h", input: "m=5, g=10, h=20", output: "1000" },
    { id: 35, concept: "Momentum", formula: "p = mv", code: "p = m*v", input: "m=10, v=5", output: "50" },
    { id: 36, concept: "Pressure", formula: "P = F/A", code: "p = f/a", input: "f=100, a=5", output: "20.0" },
    { id: 37, concept: "Ohm's Law", formula: "V = IR", code: "v = i*r", input: "i=2, r=5", output: "10" },
    { id: 38, concept: "Current", formula: "I = V/R", code: "i = v/r", input: "v=12, r=4", output: "3.0" },
    { id: 39, concept: "Resistance", formula: "R = V/I", code: "r = v/i", input: "v=12, i=3", output: "4.0" },
    { id: 40, concept: "Electrical Power", formula: "P = VI", code: "p = v*i", input: "v=12, i=2", output: "24" },
    { id: 41, concept: "Frequency", formula: "f = 1/T", code: "f = 1/t", input: "t=0.02", output: "50.0" },
    { id: 42, concept: "Period", formula: "T = 1/f", code: "t = 1/f", input: "f=50", output: "0.02" },
    { id: 43, concept: "Wave Speed", formula: "v = fλ", code: "v = f*lam", input: "f=100, lam=3", output: "300" },
    { id: 44, concept: "Acceleration", formula: "a = (v-u)/t", code: "a = (v-u)/t", input: "v=20, u=5, t=3", output: "5.0" },
    { id: 45, concept: "Final Velocity", formula: "v = u + at", code: "v = u + a*t", input: "u=10, a=2, t=5", output: "20" },
    { id: 46, concept: "Displacement", formula: "s = ut + ½at²", code: "s = u*t + 0.5*a*t**2", input: "u=0, a=10, t=2", output: "20.0" },
    { id: 47, concept: "Velocity²", formula: "v² = u² + 2as", code: "v = (u**2 + 2*a*s)**0.5", input: "u=0, a=10, s=20", output: "20.0" },
    { id: 48, concept: "Area of Trapezoid", formula: "A = ½(a+b)h", code: "a = 0.5*(a+b)*h", input: "a=5, b=7, h=4", output: "24.0" },
    { id: 49, concept: "Surface Area Cube", formula: "SA = 6s²", code: "sa = 6*s**2", input: "s=4", output: "96" },
    { id: 50, concept: "Surface Area Sphere", formula: "SA = 4πr²", code: "sa = 4*3.14*r**2", input: "r=5", output: "314.0" },
    { id: 51, concept: "Arithmetic Sequence", formula: "aₙ = a₁ + (n-1)d", code: "an = a1 + (n-1)*d", input: "a1=2, n=5, d=3", output: "14" },
    { id: 52, concept: "Geometric Sequence", formula: "aₙ = a₁r^(n-1)", code: "an = a1 * r**(n-1)", input: "a1=3, r=2, n=4", output: "24" },
    { id: 53, concept: "Sum Arithmetic Series", formula: "S = n/2(2a+(n-1)d)", code: "s = n/2*(2*a+(n-1)*d)", input: "n=5, a=2, d=3", output: "40.0" },
    { id: 54, concept: "Sum Geometric Series", formula: "S = a(1-r^n)/(1-r)", code: "s = a*(1-r**n)/(1-r)", input: "a=2, r=2, n=3", output: "14.0" },
    { id: 55, concept: "Factorial", formula: "n! = n×(n-1)×...×1", code: "import math; f = math.factorial(n)", input: "n=5", output: "120" },
    { id: 56, concept: "Permutation", formula: "P(n,r) = n!/(n-r)!", code: "p = math.factorial(n)//math.factorial(n-r)", input: "n=5, r=3", output: "60" },
    { id: 57, concept: "Combination", formula: "C(n,r) = n!/(r!(n-r)!)", code: "c = math.factorial(n)//(math.factorial(r)*math.factorial(n-r))", input: "n=5, r=2", output: "10" },
    { id: 58, concept: "Standard Deviation", formula: "σ = √(Σ(x-μ)²/N)", code: "import statistics; s = statistics.stdev(lst)", input: "[2,4,6,8]", output: "2.58" },
    { id: 59, concept: "Variance", formula: "σ² = Σ(x-μ)²/N", code: "v = statistics.variance(lst)", input: "[2,4,6,8]", output: "6.67" },
    { id: 60, concept: "Probability", formula: "P(E) = n(E)/n(S)", code: "p = ne/ns", input: "ne=2, ns=6", output: "0.33" },
    { id: 61, concept: "Z-Score", formula: "z = (x-μ)/σ", code: "z = (x-mu)/sigma", input: "x=75, mu=70, sigma=5", output: "1.0" },
    { id: 62, concept: "Correlation", formula: "r = Σ(x-x̄)(y-ȳ)/√(Σ(x-x̄)²Σ(y-ȳ)²)", code: "import numpy; r = numpy.corrcoef(x,y)[0,1]", input: "x=[1,2,3], y=[2,4,6]", output: "1.0" },
    { id: 63, concept: "Linear Regression", formula: "y = mx + b", code: "m = (n*sxy-sx*sy)/(n*sx2-sx**2)", input: "slope calc", output: "varies" },
    { id: 64, concept: "Exponential Growth", formula: "N = N₀e^(rt)", code: "n = n0 * math.e**(r*t)", input: "n0=100, r=0.05, t=10", output: "164.87" },
    { id: 65, concept: "Logarithm Base Change", formula: "log_b(a) = log(a)/log(b)", code: "lb = math.log(a)/math.log(b)", input: "a=8, b=2", output: "3.0" },
    { id: 66, concept: "Natural Log", formula: "ln(x) = log_e(x)", code: "ln = math.log(x)", input: "x=2.718", output: "0.999" },
    { id: 67, concept: "Common Log", formula: "log(x) = log₁₀(x)", code: "lg = math.log10(x)", input: "x=100", output: "2.0" },
    { id: 68, concept: "Sine", formula: "sin(θ) = opp/hyp", code: "s = math.sin(math.radians(th))", input: "th=30", output: "0.5" },
    { id: 69, concept: "Cosine", formula: "cos(θ) = adj/hyp", code: "c = math.cos(math.radians(th))", input: "th=60", output: "0.5" },
    { id: 70, concept: "Tangent", formula: "tan(θ) = opp/adj", code: "t = math.tan(math.radians(th))", input: "th=45", output: "1.0" },
    { id: 71, concept: "Law of Sines", formula: "a/sin(A) = b/sin(B)", code: "b = a*math.sin(B)/math.sin(A)", input: "a=5, A=30°, B=60°", output: "8.66" },
    { id: 72, concept: "Law of Cosines", formula: "c² = a²+b²-2ab×cos(C)", code: "c = (a**2+b**2-2*a*b*math.cos(C))**0.5", input: "a=3, b=4, C=90°", output: "5.0" },
    { id: 73, concept: "Area of Parallelogram", formula: "A = bh", code: "a = b*h", input: "b=8, h=5", output: "40" },
    { id: 74, concept: "Volume Cone", formula: "V = ⅓πr²h", code: "v = (1/3)*3.14*r**2*h", input: "r=3, h=7", output: "65.94" },
    { id: 75, concept: "Volume Pyramid", formula: "V = ⅓Bh", code: "v = (1/3)*b*h", input: "b=20, h=9", output: "60.0" },
    { id: 76, concept: "Heron's Formula", formula: "A = √(s(s-a)(s-b)(s-c))", code: "s=(a+b+c)/2; a=(s*(s-a)*(s-b)*(s-c))**0.5", input: "a=3, b=4, c=5", output: "6.0" },
    { id: 77, concept: "Diagonal Rectangle", formula: "d = √(l²+w²)", code: "d = (l**2+w**2)**0.5", input: "l=3, w=4", output: "5.0" },
    { id: 78, concept: "Sum of Angles Triangle", formula: "A+B+C = 180°", code: "c = 180 - a - b", input: "a=60, b=70", output: "50" },
    { id: 79, concept: "Exterior Angle", formula: "ext = int₁ + int₂", code: "ext = int1 + int2", input: "int1=50, int2=70", output: "120" },
    { id: 80, concept: "Arc Length", formula: "L = rθ", code: "l = r*theta", input: "r=5, theta=1.57", output: "7.85" },
    { id: 81, concept: "Sector Area", formula: "A = ½r²θ", code: "a = 0.5*r**2*theta", input: "r=4, theta=1.57", output: "12.56" },
    { id: 82, concept: "Regular Polygon Area", formula: "A = ½pa", code: "a = 0.5*p*ap", input: "p=20, ap=5", output: "50.0" },
    { id: 83, concept: "Sum Interior Angles", formula: "S = (n-2)×180°", code: "s = (n-2)*180", input: "n=6", output: "720" },
    { id: 84, concept: "Each Interior Angle", formula: "I = (n-2)×180°/n", code: "i = (n-2)*180/n", input: "n=8", output: "135.0" },
    { id: 85, concept: "Each Exterior Angle", formula: "E = 360°/n", code: "e = 360/n", input: "n=6", output: "60.0" },
    { id: 86, concept: "Compound Amount", formula: "A = P(1+r)^t", code: "a = p*(1+r)**t", input: "p=1000, r=0.1, t=3", output: "1331.0" },
    { id: 87, concept: "Continuous Compound", formula: "A = Pe^(rt)", code: "a = p*math.e**(r*t)", input: "p=1000, r=0.05, t=5", output: "1284.0" },
    { id: 88, concept: "Present Value", formula: "PV = FV/(1+r)^t", code: "pv = fv/(1+r)**t", input: "fv=1500, r=0.1, t=2", output: "1239.67" },
    { id: 89, concept: "Annuity Payment", formula: "PMT = PV×r/(1-(1+r)^-n)", code: "pmt = pv*r/(1-(1+r)**-n)", input: "pv=10000, r=0.01, n=12", output: "888.49" },
    { id: 90, concept: "Debt-to-Income", formula: "DTI = (debt/income)×100", code: "dti = (debt/income)*100", input: "debt=2000, income=5000", output: "40.0" },
    { id: 91, concept: "Return on Investment", formula: "ROI = (gain-cost)/cost×100", code: "roi = (gain-cost)/cost*100", input: "gain=1500, cost=1000", output: "50.0" },
    { id: 92, concept: "Break Even Point", formula: "BEP = FC/(SP-VC)", code: "bep = fc/(sp-vc)", input: "fc=1000, sp=50, vc=30", output: "50.0" },
    { id: 93, concept: "Margin", formula: "M = (SP-CP)/SP×100", code: "m = (sp-cp)/sp*100", input: "sp=100, cp=70", output: "30.0" },
    { id: 94, concept: "Markup", formula: "MU = (SP-CP)/CP×100", code: "mu = (sp-cp)/cp*100", input: "sp=150, cp=100", output: "50.0" },
    { id: 95, concept: "Tax Amount", formula: "Tax = Price×Rate/100", code: "tax = price*rate/100", input: "price=100, rate=8", output: "8.0" },
    { id: 96, concept: "Net Price", formula: "NP = MP - Discount", code: "np = mp - disc", input: "mp=500, disc=100", output: "400" },
    { id: 97, concept: "Commission", formula: "C = Sales×Rate/100", code: "c = sales*rate/100", input: "sales=5000, rate=5", output: "250.0" },
    { id: 98, concept: "Tip Amount", formula: "Tip = Bill×Rate/100", code: "tip = bill*rate/100", input: "bill=100, rate=15", output: "15.0" },
    { id: 99, concept: "Unit Rate", formula: "UR = Total/Units", code: "ur = total/units", input: "total=150, units=5", output: "30.0" },
    { id: 100, concept: "Ratio to Percentage", formula: "P = (part/whole)×100", code: "p = (part/whole)*100", input: "part=3, whole=4", output: "75.0" }
  ];

  const filteredFormulas = formulas.filter(f => 
    f.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.formula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">100 Formula Reference Table</h1>
          <p className="text-gray-600 mb-4">Mathematics, Physics, Finance & More</p>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search formulas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold">#</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Concept</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Formula</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Code Sample</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Input</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold">Output</th>
                </tr>
              </thead>
              <tbody>
                {filteredFormulas.map((f, idx) => (
                  <tr key={f.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 text-sm text-gray-600 font-medium">{f.id}</td>
                    <td className="px-4 py-3 text-sm font-medium text-indigo-900">{f.concept}</td>
                    <td className="px-4 py-3 text-sm font-mono text-purple-700">{f.formula}</td>
                    <td className="px-4 py-3 text-xs font-mono bg-gray-100 text-green-700">{f.code}</td>
                    <td className="px-4 py-3 text-xs font-mono text-blue-600">{f.input}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-orange-600">{f.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {filteredFormulas.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No formulas found matching your search.
            </div>
          )}
        </div>

        <div className="mt-6 bg-indigo-50 rounded-lg p-4 text-sm text-indigo-800">
          <p><strong>Tip:</strong> Use the search bar to quickly find specific formulas. All code samples are in Python syntax.</p>
        </div>
      </div>
    </div>
  );
};

export default FormulaTable;