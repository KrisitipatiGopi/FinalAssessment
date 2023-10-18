import './App.css'
import {Component} from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  Cell,
  ResponsiveContainer,
  PieChart,
  Pie,
  Label
} from 'recharts'

const PieChartData =[
  { name: 'Geeksforgeeks', students: 15 },
  { name: 'Geek-i-knack', students: 30 },
  { name: 'Technical scripter', students: 55 },
];

const data = [
  {
    group_name: 'Jan',
    Earnings: 200,
    fillColor: 'grey',
  },
  {
    group_name: 'Feb',
    Earnings: 300,
    fillColor: 'grey',
  },
  {
    group_name: 'Mar',
    Earnings: 1000,
    fillColor: 'grey',
  },
  {
    group_name: 'Apr',
    Earnings: 700,
    fillColor: 'grey',
  },
  {
    group_name: 'May',
    Earnings: 1100,
    fillColor: 'grey',
  },
  {
    group_name: 'June',
    Earnings: 700,
    fillColor: 'grey',
  },
  {
    group_name: 'July',
    Earnings: 800,
    fillColor: 'grey',
  },
  {
    group_name: 'Aug',
    Earnings: 2000,
    fillColor: 'orange',
  },
  {
    group_name: 'Sep',
    Earnings: 1500,
    fillColor: 'grey',
  },
  {
    group_name: 'Oct',
    Earnings: 600,
    fillColor: 'grey',
  },
  {
    group_name: 'Nov',
    Earnings: 500,
    fillColor: 'grey',
  },
  {
    group_name: 'Dec',
    Earnings: 300,
    fillColor: 'grey',
  },
]

const myList = [
  {
    imageUrl:
      'data:image/jpeg;base64,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',
    text: 'Product',
    alt: ' ',
  },
  {
    imageUrl:
      'https://cdn4.vectorstock.com/i/1000x1000/45/93/customers-icon-on-white-background-simple-element-vector-28224593.jpg',
    text: 'Customers',
    alt: ' ',
  },
  {
    imageUrl:
      'data:image/png;base64,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',
    text: 'Income',
    alt: ' ',
  },
  {
    imageUrl:
      'data:image/jpeg;base64,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',
    text: 'Promote',
    alt: ' ',
  },
  {
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKY-uzjX0vTI07jqPCLkgMfhQ0djqJ5PPBQYmrjD_BJNMWzbFZlhr2_wX26a38KIKSa9s&usqp=CAU',
    text: 'Help',
    alt: ' ',
  },
]

const myFinancialData = [
  {
    key: 1,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/5778/5778578.png',
    alt: 'earnings',
    text: 'Earnings',
    money: '$198K',
    Overall: 'Profit',
    isTrue: true,
    growth: '37.8%',
  },
  {
    key: 2,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/6633/6633349.png',
    alt: 'orders',
    text: 'Orders',
    money: '$2.4K',
    Overall: 'Loss',
    isTrue: false,
    Loss: '2%',
  },
  {
    key: 3,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/7075/7075626.png',
    alt: 'balance',
    text: 'Balance',
    money: '$2.4K',
    Overall: 'Loss',
    isTrue: false,
    Loss: '2%',
  },
  {
    key: 4,
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/3271/3271314.png',
    alt: 'total sales',
    text: 'Total Sales',
    money: '$89k',
    Overall: 'Profit',
    isTrue: true,
    growth: '11%',
  },
]

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="leftContainer">
          <div className="innerMainContainer">
            <div>
              <div>
                <h1>Dashboard</h1>
              </div>
              <div className="highlightenedTab">
                <img
                  src="data:image/jpeg;base64,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"
                  className="imageAdjustments"
                  alt=" "
                />
                <h1 className="heading">Dashboard</h1>
              </div>
              <div className="myListItems">
                {myList.map(each => (
                  <div className="arrange">
                    <div className="dt">
                      <img
                        src={each.imageUrl}
                        alt={each.alt}
                        className="imageAdjustments"
                      />
                      <h1 className="heading">{each.text}</h1>
                    </div>
                    <div className="arrowContainer">
                      <p>
                        <i className="arrow right"> </i>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="profileDetails">
              <p>Hello</p>
              </div>
          </div>
        </div>
        <div className="rightContainer">
          <div className="rightInnerContainer">
            <div className="nameContainer">
              <div className="name">Hello Sharukh!!</div>
              <div className="searchContainer">
                <input
                  type="search"
                  className="searchbox"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="dataConatainer">
            {myFinancialData.map(each => (
              <div className="eachData">
                <div className="imageContainer">
                  <img
                    src={each.imageUrl}
                    alt={each.alt}
                    className="imageStyling"
                  />
                </div>
                <div className='contentContainer'>
                  <p className="styles">{each.text}</p>
                  <p className="styles1">{each.money}</p>
                  <p key={each.key} className={`Profit ${each.Overall === 'Loss' ? 'loss' : "growth"}`}><b>{each[each.isTrue ? 'growth' : 'Loss']}{each.Overall}</b><span className='nocolor'>this month</span></p>
                </div>
              </div>
            ))}
          </div>
          <div className="ChartsContainer">
            <div className='barContainer'>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={data}
                  margin={{
                    top: 10,
                  }}
                >
                  <XAxis
                    dataKey="group_name"
                    tick={{
                      stroke: 'black',
                      strokeWidth: 1,
                    }}
                  />
                  <YAxis
                    tick={{
                      stroke: 'transparent',
                      strokeWidth: 0,
                    }}
                  />
                  <Legend
                    wrapperStyle={{
                      padding: 30,
                    }}
                  />
                  <Bar dataKey="Earnings" barSize="10%">
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="orange" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    <Cell fill="grey" />
                    </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className='PieContaienr'>
              <p className='para'>Customers</p>
              <p className='para1'>Customers that buy new Products</p>
              <div className='pie'>
              <ResponsiveContainer width="100%" height={300}>
                  <PieChart width={300} height={300} >
                    <Pie data={PieChartData} dataKey="students" outerRadius={70} 
                    innerRadius={40} fill="green" >
                      <Cell fill="yellow" width={100} strokeWidth={-10}/>
                      <Cell fill="grey" width={60}  strokeWidth={10}/>
                      <Cell fill="blue" width={60}  strokeWidth={7}/>
                      <Label
                          value="65% New"
                          position="center"
                          fill="Grey"
                      />
                    </Pie>
                  </PieChart> 
              </ResponsiveContainer>
              </div>
            </div>
          </div>
          <div className='remainingContainer'>
                <div className='ReaminingInnerContainer'>
                  <h1 className='heading'>Product Sell</h1>
                  <div className='inputContainer'>
                    <input type="search" className='inputBox' placeholder='search'/>
                    <p>Last 30 Days<i className="arrow down"> </i></p>
                  </div>
                </div>
                <div className='ReaminingInnerContainer'>
                    <p>Product Name</p>
                    <div className='inputContainer'>
                        <p className='paragrapgh'>Total Stock</p>
                        <p className='paragrapgh'>Price</p>
                        <p className='paragrapgh'>Total Sales</p>
                    </div>
                  </div>
                  <div className='ReaminingInnerContainer'>
                    <div className='rows'>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-R-U6QHzNHZATGZzDTPQJR6-8nl5blQmstWKdiXqgFAuLbyFbbrJnPNU7EEntV5KY7NU&usqp=CAU" alt = "abstract3D" className='abstract'/>
                          <div className='colums'>
                             <p className='margin'>abstract3D</p>
                             <p className='small'>some content</p>
                          </div>
                    </div>
                    <div className='inputContainer'>
                        <p className='paragrapgh'>32 in Stock</p>
                        <p className='paragrapgh1'>$ 45.99</p>
                        <p className='paragrapgh1'>20</p> 
                    </div>
                  </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App