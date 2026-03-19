function solution(triangle) {
    
    for (let i = triangle.length - 2; i >= 0; i--) {
        
        for (let j = 0; j < triangle[i].length; j++) {
            
           
            const leftChild = triangle[i + 1][j];
            const rightChild = triangle[i + 1][j + 1];
            const maxChild = Math.max(leftChild, rightChild);
            
            triangle[i][j] = triangle[i][j] + maxChild;
        }
    }

  
    return triangle[0][0];
}