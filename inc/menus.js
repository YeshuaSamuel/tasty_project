let conn = require('./dv')

module.exports = {
    getMenus(){
        return new Promisse((resolve, reject) => {
            conn.query(`SELECT * FROM tb_menus ORDER BY title`
            , (err, results)=>{
    if(err) {
      reject(err);
    }

    resolve(results)

  })
        })
    }
}