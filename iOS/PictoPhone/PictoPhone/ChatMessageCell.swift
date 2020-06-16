//
//  ChatMessage.swift
//  PictoPhone
//
//  Created by Chris Rudel on 6/16/20.
//  Copyright © 2020 Chris Rudel. All rights reserved.
//

import UIKit

class ChatMessageCell: UITableViewCell {
    
    let messageLabel = UILabel()
    let bubbleBackgroundView = UIView()
    var leadingConstraint = NSLayoutConstraint()
    var trailingConstraint = NSLayoutConstraint()
    
    var isIncoming: Bool! {
        didSet{
            if isIncoming{
                bubbleBackgroundView.backgroundColor = .white
                messageLabel.textColor = .black
                leadingConstraint.isActive = true
                trailingConstraint.isActive = false
                
            } else{
                bubbleBackgroundView.backgroundColor = .darkGray
                messageLabel.textColor = .white
                leadingConstraint.isActive = false
                trailingConstraint.isActive = true
            }
//            bubbleBackgroundView.backgroundColor = isIncoming ? .white : .blue
//            messageLabel.textColor = isIncoming ? .black : .white
        }
    }
    
    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        backgroundColor = .clear
        bubbleBackgroundView.backgroundColor = .cyan
        bubbleBackgroundView.layer.cornerRadius = 15
        bubbleBackgroundView.translatesAutoresizingMaskIntoConstraints = false
        messageLabel.translatesAutoresizingMaskIntoConstraints = false
        addSubview(bubbleBackgroundView)
        addSubview(messageLabel)
        //messageLabel.backgroundColor = .green
        messageLabel.text = "We want to provide a long string for the tableview cells so that the text actually wraps into the next line"
        messageLabel.numberOfLines = 0
        
        
        // constraints
        let constraints = [messageLabel.topAnchor.constraint(equalTo: topAnchor, constant: 32),
        messageLabel.widthAnchor.constraint(lessThanOrEqualToConstant: 250),
        messageLabel.bottomAnchor.constraint(equalTo: bottomAnchor, constant: -32),
        
        bubbleBackgroundView.topAnchor.constraint(equalTo: messageLabel.topAnchor, constant: -16),
        bubbleBackgroundView.bottomAnchor.constraint(equalTo: messageLabel.bottomAnchor, constant: 16),
        bubbleBackgroundView.leadingAnchor.constraint(equalTo: messageLabel.leadingAnchor, constant: -16),
        bubbleBackgroundView.trailingAnchor.constraint(equalTo: messageLabel.trailingAnchor, constant: 16)
        
        ]
        NSLayoutConstraint.activate(constraints)
        
        leadingConstraint =        messageLabel.leadingAnchor.constraint(equalTo: leadingAnchor, constant: 32)
                
        trailingConstraint = messageLabel.trailingAnchor.constraint(equalTo: trailingAnchor, constant: -32)
                
        
        
        

        
//        messageLabel.frame = CGRect(x: 0, y: 0, width: 100, height: 100)
            
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
}
