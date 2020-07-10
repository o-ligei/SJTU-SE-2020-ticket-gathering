# SJTU-SE-2020-ticket-gathering
## Database Design: Mysql+MongoDB+Neo4j
### Mysql+MongoDB

  tg_user(user_id,username,gender,email,phone,password,personicon(MongoDB))
  
  tg_activity(activity_id,title,actor,timescale,venue,img(MongoDB),description(MongoDB))
  
  tg_actitem(actitem_id,activity_id,website,prices(MongoDB))
  
    prices: { timecnt: 3, tickets: [ {time:’2020-07-08’, classcnt: 3, class: [{price: 300, num: 100} , {} , {} ] } , {} , {} ] }
    
  tg_order(order_id,user_id,actitem_id,price,amount)
  
### Neo4j for recommendation and classification

  Tripartite graph：User,Activity,Property
  
  Property: city,category(subcategory),actor
  
  (Activity,Property) for classification and similarity recommendation: easy to achieve in neo4j
  
  (User,Activity) for personalized recommendation: Personal Ranks Algorithm 
  
    https://blog.csdn.net/qq_40006058/article/details/83444131 for more
