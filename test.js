// a 값을 기준으로 오름차순으로 정렬하고 a값이 같다면 b값을 기준으로 내림차순하여 정렬합니다.
const orderArr = (arr) => {
    arr.sort((x, y) => {
        if (x.a > y.a) {
            return 1
        }
        else if (x.a < y.a) {
            return -1
        }
        else if (x.a == y.a) {
            if (x.b > y.b) {
                return -1
            }
            else if (x.b < y.b) {
                return 1
            }
            else if (x.b == y.b) {
                return 0
            }
        }
    })
    return arr
}

let startOrderArr = () => {
    let returned = orderArr([
        { a: 10, b: 5 },
        { a: 7, b: 4 },
        { a: 7, b: 5 },
        { a: 15, b: 1 },
        { a: 10, b: 2 }
    ])
    console.log(returned)
}


// 자연수 x부터 y까지의 합을 구하는 코드를 작성하세요.
const sumNat = (start, end) => {
    if (start == end) {
        return start
    }
    let arr = Array.apply(null, Array(end - start + 1))
    let i = 0
    let newArr = []
    arr.forEach((ele) => {
        newArr.push(i + start)
        i++
    })
    let sum = newArr.reduce((a, b) => { return a + b })
    return sum
}
//sumNat(1, 10)

// 트리 구조를 표현하는 데이터셋을 만드세요.
let dataSet = {
    "name": 1,
    "children": [
        {
            "name": 3,
            "children": [
                {
                    "name": 5
                },
                {
                    "name": 6
                }
            ]
        },
        {
            "name": 4
        }
    ]
}

// 데이터셋이 주어졌을때 최대값을 찾는 함수를 만드세요.
let findMax = (given) => {
    let record = (data) => {
        let arr = []
        let firstChildren = data.hasOwnProperty('children')
        if (firstChildren) {
            arr.push(data['name'])
            const findChildren = (children) => {
                for (let i = 0; i < children.length; i++) {
                    arr.push(children[i].name)
                    if (children[i].hasOwnProperty('children')) {
                        findChildren(children[i]['children'])
                    }
                }
            }
            let childrenArr = data['children']
            findChildren(childrenArr)
            //console.log(arr)
            return arr
        }
        else {
            arr.push(data['name'])
            //console.log(arr)
            return arr
        }
    }
    let recorded = record(given)
    recorded.sort((a, b) => {
        if (a > b) {
            return 1
        }
        else if (a < b) {
            return -1
        }
        else {
            return 0
        }
    })
    let max = recorded[recorded.length - 1]
    console.log(max)
    return max
}

let startFindMax = () => {
    findMax(dataSet)
}

// N개의 정수로 이뤄진 배열 A가 주어졌을 때 배열의 연속된 부분의 합이 0 이상이면서 
// 최대가 되는 영역과 최대값을 봔한하는 함수를 구현하세요.
let solution = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let s = ''
        s = s + arr[i]
        newArr.push(s)
        if (i == arr.length - 1) {
            break
        }
        for (let j = i + 1; j < arr.length; j++) {
            s = s + '+' + arr[j]
            newArr.push(s)
        }
    }
    let newArr2 = []
    for (let i = 0; i < newArr.length; i++) {
        newArr2.push({ express: newArr[i], sum: eval(newArr[i]) })
    }
    for (let i = 0; i < newArr2.length; i++) {
        newArr2.sort((a, b) => {
            if (a.sum > b.sum) {
                return 1
            }
            else if (a.sum < b.sum) {
                return -1
            }
            else if (a.sum == b.sum) {
                return 0
            }
        })
    }
    let max = (newArr2[newArr2.length - 1]).sum
    let express = (newArr2[newArr2.length - 1]).express
    let expressArr = express.split('+')
    for (let i = 0; i < expressArr.length; i++) {
        expressArr[i] = parseInt(expressArr[i])
    }
    if (max >= 0) {
        console.log({ expressArr, max })
        return { expressArr, max }
    }
    else {
        console.log({ expressArr, max: -1 })
        return { expressArr, max: -1 }
    }
}
let startSolution = () => {
    let A = [1, 2, -3, 4, 5, -6]
    solution(A)
}




