//
//  MessagesView.swift
//  PictoPhone
//
//  Created by Chris Rudel on 6/16/20.
//  Copyright © 2020 Chris Rudel. All rights reserved.
//

import UIKit

struct ChatMessage{
    var message: String
    var isIncoming: Bool
}

class MessagesView: UITableViewController{
    
    var name: String = ""
    let cellId = "id"
    
    let textMessages = [
        ChatMessage(message: "Here is my first message", isIncoming: true),
        ChatMessage(message: "Here is my second longer message that will wrap", isIncoming: true),
        ChatMessage(message: "Here is my second longer message that will wrap. I'm going to send another long message hopefully this one is long enough", isIncoming: false),
        ChatMessage(message: "whaddup", isIncoming: false)

    ]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        navigationItem.title = name
        navigationController?.navigationBar.prefersLargeTitles = true
        
        tableView.register(ChatMessageCell.self, forCellReuseIdentifier: cellId)
        tableView.separatorStyle = .none
        tableView.backgroundColor = UIColor(white: 0.95, alpha: 1)
    }
    
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return textMessages.count //placeholder
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: cellId, for: indexPath) as! ChatMessageCell
        
        let chatMessage = textMessages[indexPath.row]
        cell.messageLabel.text = chatMessage.message
        cell.isIncoming = chatMessage.isIncoming
        return cell
    }
}
