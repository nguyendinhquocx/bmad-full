# HƯỚNG DẪN SỬ DỤNG EXPERT CONSULTATION SYSTEM

> **Hệ thống tư vấn chuyên gia - Nâng cấp BMad Method lên tầm cao mới**

---

## **MỤC LỤC**

- [Tổng quan Expert System](#tổng-quan-expert-system)
- [Cách sử dụng cơ bản](#cách-sử-dụng-cơ-bản)
- [Workflow tích hợp với 7 chuyên gia cốt lõi](#workflow-tích-hợp)
- [Các tình huống sử dụng thực tế](#các-tình-huống-sử-dụng)
- [Catalog 85 chuyên gia có sẵn](#catalog-chuyên-gia)
- [Mẹo và thủ thuật nâng cao](#mẹo-và-thủ-thuật)
- [Troubleshooting](#troubleshooting)

---

## **TỔNG QUAN EXPERT SYSTEM**

### **Concept**
Expert Consultation System là **tầng thứ 2** của BMad Method, bổ sung cho 7 chuyên gia cốt lõi:

```
BMad Core (7 chuyên gia) ← Xử lý 95% workflow
        +
Expert Consultants (85 chuyên gia) ← Tư vấn chuyên sâu khi cần
        =
World-class Development Framework
```

### **Khi nào dùng Expert System:**
- ✅ **Sau milestone lớn** - Review strategic direction
- ✅ **Gặp technical challenge** - Cần expertise sâu
- ✅ **Quality assurance** - Senior-level review
- ✅ **Architecture decisions** - Long-term implications
- ✅ **Domain-specific problems** - Healthcare, Finance, etc.

### **Khi KHÔNG dùng:**
- ❌ **Basic development tasks** - Cứ dùng 7 chuyên gia cốt lõi
- ❌ **Simple bug fixes** - Không cần expert consultation
- ❌ **Daily routine work** - Expert cho major decisions thôi

---

## **CÁCH SỬ DỤNG CƠ BẢN**

### **Command Structure**
```bash
/expert "[tên-file-chuyên-gia]" "[câu-hỏi-hoặc-yêu-cầu]"
```

### **Method 1: Quick Consultation (Khuyến nghị)**
```bash
# Hỏi nhanh, nhận answer, về lại BMad workflow
/expert "Chuyên gia thiết kế toàn cục.md" "Review TodoFlow design sau Epic 1"

# Expert trả lời...
# Tự động về lại context BMad trước đó
```

**Ưu điểm:**
- ⚡ Nhanh chóng, hiệu quả
- 🔄 Không mất context BMad
- 📝 Tự động lưu log

### **Method 2: Interactive Session**
```bash
# Vào chế độ nói chuyện dài với expert
/expert "Chuyên gia bảo mật.md"

> 🔒 Security Expert activated
> Ready for consultation...

Bạn: "Audit authentication system"
Expert: [Detailed analysis...]

Bạn: "What about JWT security?"  
Expert: [JWT deep dive...]

Bạn: "/exit"
> Session saved. Returning to BMad workflow.
```

**Ưu điểm:**
- 💬 Trao đổi qua lại được
- 🧠 Deep dive vào vấn đề
- 📚 Educational value cao

### **Auto-completion (Siêu tiện!)**
```bash
/expert "Chuyên<TAB>
# → Hiện tất cả files bắt đầu "Chuyên"

/expert "thiết<TAB>
# → Hiện các chuyên gia thiết kế

/expert "bảo<TAB>  
# → "Chuyên gia bảo mật.md"
```

---

## **WORKFLOW TÍCH HỢP VỚI 7 CHUYÊN GIA CỐT LỒI**

### **BMad Standard Flow:**
```
Analyst → PM → UX → Architect → SM → Dev → QA
```

### **Enhanced Flow với Expert Consultation:**
```
Analyst → PM → UX → Architect → SM → Dev → QA
    ↓       ↓     ↓       ↓        ↓     ↓     ↓
   [Expert Consultation Points - Khi cần thiết]
```

### **Expert Consultation Points chi tiết:**

#### **1. Post-Analyst (Sau nghiên cứu)**
```bash
/analyst
*create-project-brief
*exit

# Nếu domain phức tạp, tham vấn expert
/expert "Chuyên gia y tế.md" "Review healthcare app requirements"
/expert "Chuyên gia AI.md" "Brainstorm AI integration opportunities"
```

#### **2. Post-PM (Sau tạo PRD)**
```bash
/pm
*create-prd
*exit

# Strategic review PRD
/expert "Chuyên gia quản lí dự án.md" "Review PRD for enterprise readiness"
/expert "Chuyên gia kiến trúc sư chiến lược.md" "Validate technical feasibility"
```

#### **3. Post-UX (Sau thiết kế UX)**
```bash
/ux-expert  
*create-front-end-spec
*exit

# Design philosophy review
/expert "Chuyên gia thiết kế toàn cục.md" "Review design direction với modern standards"
/expert "Chuyên gia UX.md" "Validate user experience flow"
```

#### **4. Post-Architect (Sau thiết kế hệ thống)**
```bash
/architect
*create-architecture
*exit

# Technical validation
/expert "Chuyên gia bảo mật.md" "Security architecture review"
/expert "Chuyên gia tối ưu.md" "Performance và scalability assessment"
```

#### **5. During Development (Trong quá trình Dev)**
```bash
/dev
*develop-story

# Quick technical consultation khi cần
/expert "Chuyên gia React.md" "Best practices cho component này"
/expert "Chuyên gia chuẩn code.md" "Review code structure"

# Tiếp tục dev
*continue development
```

#### **6. Post-Development (Sau khi Dev xong)**
```bash
/dev
*develop-story  
*run-tests
*exit

# Quality assurance với expert
/expert "Chuyên gia Quality.md" "Final quality check trước QA"
/expert "Chuyên gia tối ưu.md" "Performance optimization suggestions"
```

#### **7. Enhanced QA (QA với expert support)**
```bash
/qa
*review docs/stories/story-1-1.md

# Expert-level code review
/expert "Chuyên gia chuẩn code.md" "Senior code review và refactoring"
/expert "Chuyên gia bảo mật.md" "Security vulnerability check"

*exit
```

---

## **CÁC TÌNH HUỐNG SỬ DỤNG THỰC TẾ**

### **Tình huống 1: Epic Completion Review**

**Context:** Vừa hoàn thành Epic 1 (Foundation), cần direction cho Epic 2

```bash
# Hoàn thành Epic 1
/qa
*review final-story
*exit

# Strategic consultation
/expert "Chuyên gia thiết kế toàn cục.md" "Epic 1 completed (auth + todo CRUD). Review design consistency và direction cho Epic 2-6"

# Expert sẽ analyze và đưa ra:
# - Design token system recommendations
# - Component library structure  
# - Interaction patterns for team features
# - Mobile-first responsive strategy

# Apply recommendations
/po
*execute-checklist-po
# Update PRD và architecture dựa trên expert advice
```

### **Tình huống 2: Security Implementation**

**Context:** Đang implement authentication, cần security validation

```bash
# Trong quá trình development
/dev
*develop-story auth-implementation

# Security consultation
/expert "Chuyên gia bảo mật.md" "Review JWT implementation. Current approach: bcrypt + JWT với 15min expiration. Security concerns?"

# Expert response sẽ include:
# - JWT secret strength requirements
# - Token rotation strategy
# - Rate limiting implementation
# - Additional security layers

# Implement security improvements
*apply-security-enhancements
*run-security-tests
```

### **Tình huống 3: Performance Optimization**

**Context:** App chạy chậm, cần optimization strategy

```bash
# Phát hiện performance issue
/qa
*review performance-metrics

# Expert consultation
/expert "Chuyên gia tối ưu.md"
> Interactive mode cho detailed analysis

Bạn: "TodoFlow loading 3+ seconds, cần optimization"
Expert: [Performance analysis framework...]

Bạn: "Database queries có vấn đề không?"
Expert: [Database optimization strategies...]

Bạn: "Frontend bundling approach?"
Expert: [Code splitting và lazy loading...]

Bạn: "/exit"

# Implement optimizations
/dev
*implement-performance-improvements
```

### **Tình huống 4: Platform-Specific Development**

**Context:** Cần build Android app, chưa có experience

```bash
# Planning mobile development
/pm
*create-epic mobile-app

# Platform expert consultation  
/expert "Chuyên gia Android.md" "TodoFlow hiện tại React web app. Strategy để build Android version với shared codebase?"

# Expert sẽ recommend:
# - React Native migration path
# - Code sharing strategies
# - Platform-specific considerations
# - Development workflow adjustments

# Update architecture
/architect
*update-mobile-architecture
```

### **Tình huống 5: Domain-Specific Features**

**Context:** Client muốn thêm healthcare compliance features

```bash
# New requirements analysis
/analyst
*document-project healthcare-features

# Domain expert consultation
/expert "Chuyên gia y tế.md" "TodoFlow cần thêm HIPAA compliance cho healthcare teams. Requirements và implementation approach?"

# Expert response covers:
# - HIPAA compliance requirements
# - Data encryption standards
# - Audit logging needs
# - User permission models

# Update PRD
/pm
*create-brownfield-epic healthcare-compliance
```

---

## **CATALOG 85 CHUYÊN GIA CÓ SẴN**

### **🎯 Strategic Advisors (Tư vấn chiến lược)**

#### **Design & Philosophy**
- **Chuyên gia thiết kế toàn cục.md** - Quantum Pragmatic Minimalism philosophy
- **Chuyên gia huyền thoại tư vấn thiết kế.md** - Legendary design mentor  
- **Chuyên gia thiết kế tối giản.md** - Minimalist design principles
- **Chuyên gia thiết kế.md** - General design expertise

**Khi nào dùng:** Major design decisions, UI/UX strategy, aesthetic direction

#### **Project & Business Strategy**
- **Chuyên gia quản lí dự án.md** - Project management excellence
- **Chuyên gia kiến trúc sư chiến lược.md** - Technical strategy architect
- **Chuyên gia trí tuệ kinh doanh.md** - Business intelligence advisor
- **Chuyên gia lập kế hoạch.md** - Planning và roadmap specialist

**Khi nào dùng:** Epic planning, business alignment, strategic decisions

### **🔧 Technical Specialists (Chuyên gia kỹ thuật)**

#### **Security & Quality**
- **Chuyên gia bảo mật.md** - Quantum Security Intelligence Architect
- **Chuyên gia chuẩn code.md** - Code standards và quality assurance
- **Chuyên gia Quality.md** - Quality management systems
- **Chuyên gia kiểm thử và deploy ứng dụng.md** - Testing và deployment

**Khi nào dùng:** Security audits, code reviews, quality gates, deployment

#### **Performance & Optimization**
- **Chuyên gia tối ưu.md** - Performance optimization specialist  
- **Chuyên gia Data Analyst.md** - Data analysis và insights
- **Chuyên gia DevOps.md** - Infrastructure và deployment
- **Chuyên gia Cloudflare.md** - CDN và web performance

**Khi nào dùng:** Performance issues, scalability planning, infrastructure

### **💻 Platform Experts (Chuyên gia nền tảng)**

#### **Frontend Development**
- **Chuyên gia React.md** - React ecosystem specialist
- **Chuyên gia Frontend.md** - General frontend expertise
- **Chuyên gia UX.md** - User experience specialist
- **Chuyên gia Web.md** - Web technologies expert

**Khi nào dùng:** React-specific issues, frontend architecture, UX problems

#### **Mobile & Cross-Platform**
- **Chuyên gia Android.md** - Android development specialist
- **Chuyên gia Mobile.md** - Mobile development strategy
- **Chuyên gia thiết kế di động.md** - Mobile design patterns

**Khi nào dùng:** Mobile app development, cross-platform strategies

#### **Backend & Data**
- **Chuyên gia thiết kế Database.md** - Database architecture
- **Chuyên gia Data.md** - Data management strategies
- **Chuyên gia API.md** - API design và integration

**Khi nào dùng:** Database design, API architecture, data modeling

### **🤖 Automation & Tools (Tự động hóa & công cụ)**

#### **Automation Specialists**
- **Chuyên gia Automation.md** - Automation strategy expert
- **Chuyên gia tự động hoá.md** - Process automation specialist
- **Chuyên gia xây dựng hệ thống tự động hóa.md** - System automation architect

**Khi nào dùng:** Workflow automation, process optimization, tool integration

#### **Productivity Tools**
- **Chuyên gia Excel.md** - Excel automation và analysis
- **Chuyên gia Apps script.md** - Google Apps Script specialist
- **Chuyên gia Power Query.md** - Data transformation expert
- **Chuyên gia google sheet.md** - Google Sheets automation

**Khi nào dùng:** Data processing, spreadsheet automation, business tools

### **🏥 Domain Specialists (Chuyên gia lĩnh vực)**

#### **Industry-Specific**
- **Chuyên gia y tế.md** - Healthcare systems specialist
- **Chuyên gia lĩnh vực nghề nghiệp công việc.md** - Professional domains expert

**Khi nào dùng:** Industry-specific requirements, compliance, domain knowledge

#### **Technology Integration**
- **Chuyên gia AI.md** - Artificial Intelligence integration
- **Chuyên gia tích hợp AI.md** - AI integration strategies

**Khi nào dùng:** AI feature development, machine learning integration

### **💡 Creative & Innovation (Sáng tạo & đổi mới)**

#### **Innovation Specialists**
- **Chuyên gia sáng tạo.md** - Creative thinking và innovation
- **Chuyên gia tưởng tượng.md** - Imaginative solutions specialist
- **Chuyên gia so sánh và gợi ý.md** - Comparison và recommendation expert

**Khi nào dùng:** Creative problem solving, innovation brainstorming

#### **Analysis & Strategy**
- **Chuyên gia phân tích ý tưởng chuyên sâu.md** - Deep idea analysis
- **Chuyên gia giải quyết vấn đề.md** - Problem-solving methodologies
- **Chuyên gia thiết kế giải pháp giải quyết vấn đề.md** - Solution design

**Khi nào dùng:** Complex problem analysis, solution architecture

---

## **MẸO VÀ THỦ THUẬT NÂNG CAO**

### **1. Expert Discovery Strategy**

#### **Tìm expert phù hợp:**
```bash
# Method 1: Keyword search trong filename
/expert "tối<TAB>        # → tối ưu, tối giản
/expert "thiết<TAB>       # → các expert thiết kế
/expert "automation<TAB>  # → automation experts

# Method 2: Browse by category
# Check EXPERT.md này để tìm category phù hợp
```

#### **Multiple expert consultation:**
```bash
# Sequence consultations cho complex problems
/expert "Chuyên gia thiết kế toàn cục.md" "Overall design direction"
# Apply recommendations

/expert "Chuyên gia UX.md" "Detailed UX implementation"  
# Refine approach

/expert "Chuyên gia React.md" "Technical implementation strategy"
# Final implementation plan
```

### **2. Context Management**

#### **Preserve BMad context:**
```bash
# Current: Working với Developer
/dev
*develop-story story-2-1

# Quick expert consultation (context preserved)
/expert "..." "question"
# Expert answers, auto-return to /dev

# Continue exactly where left off  
*continue story-2-1
```

#### **Long consultation sessions:**
```bash
# When you need extended discussion
/expert "Chuyên gia kiến trúc sư chiến lược.md"
> Enter interactive mode

# Multiple exchanges...
# Remember to exit explicitly
/exit
> Return to previous BMad context
```

### **3. Documentation Strategy**

#### **Consultation logs automatically generated:**
```
docs/consultations/
├── 2024-08-15-design-review-epic1.md
├── 2024-08-15-security-audit-auth.md
├── 2024-08-16-performance-optimization.md
└── 2024-08-16-architecture-mobile.md
```

#### **Action item tracking:**
```markdown
# Mỗi consultation log contains:
## Action Items
- [ ] Immediate: [Actions for right now]
- [ ] Short-term: [Current sprint/epic]  
- [ ] Long-term: [Future planning]
- [ ] Follow-up: [Future consultations]
```

### **4. Integration với BMad Workflow**

#### **Feed expert insights back:**
```bash
# Expert recommendations become:
1. New stories cho /sm
2. Architecture updates cho /architect  
3. PRD refinements cho /pm
4. Code improvements cho /dev
5. Quality standards cho /qa
```

#### **Schedule follow-up consultations:**
```bash
# Plan expert consultations ahead
Epic 1: Security audit after auth implementation
Epic 2: UX review after todo management  
Epic 3: Architecture review for team features
Epic 4: Performance audit after real-time features
Epic 5: Integration review for Trello sync
Epic 6: Final quality review before deployment
```

### **5. Expert Selection Strategies**

#### **By Development Phase:**
```bash
# Planning Phase
- Strategic advisors: thiết kế toàn cục, kiến trúc sư chiến lược
- Domain specialists: industry-specific experts

# Development Phase  
- Technical specialists: bảo mật, chuẩn code, tối ưu
- Platform experts: React, Android, specific technologies

# Quality Phase
- Quality specialists: Quality, kiểm thử và deploy
- Performance experts: tối ưu, Data Analyst
```

#### **By Problem Type:**
```bash
# Design Problems
→ thiết kế toàn cục, UX, thiết kế tối giản

# Technical Problems  
→ bảo mật, chuẩn code, tối ưu, DevOps

# Strategic Problems
→ quản lí dự án, kiến trúc sư chiến lược, trí tuệ kinh doanh

# Creative Problems
→ sáng tạo, tưởng tượng, phân tích ý tưởng chuyên sâu
```

### **6. Advanced Workflow Patterns**

#### **Expert Review Gates:**
```bash
# Mandatory expert reviews for quality
Epic Completion → Design Review → Security Audit → Performance Check
     ↓                ↓              ↓               ↓
   /expert      /expert        /expert         /expert
   "thiết kế"    "bảo mật"      "tối ưu"       "Quality"
```

#### **Expert-Driven Innovation:**
```bash
# Use creative experts for breakthrough ideas
Stuck on problem → Creative consultation → Innovation breakthrough
        ↓                    ↓                      ↓
    /expert               /expert                /expert  
   "giải quyết          "sáng tạo"            "AI integration"
    vấn đề"
```

---

## **TROUBLESHOOTING**

### **Vấn đề 1: Expert không hiểu context**

**Symptom:** Expert response không relevant hoặc quá generic

**Solution:**
```bash
# Cung cấp context chi tiết hơn
❌ /expert "Chuyên gia bảo mật.md" "Check security"

✅ /expert "Chuyên gia bảo mật.md" "TodoFlow React app với JWT authentication và PostgreSQL. Hiện tại có basic auth flow. Cần security audit cho team collaboration features sắp implement."
```

### **Vấn đề 2: Quá nhiều expert, không biết chọn ai**

**Solution:**
```bash
# Start với broad category, sau đó narrow down
1. Xác định loại vấn đề: Technical/Strategic/Creative/Domain
2. Check category trong EXPERT.md này
3. Start với general expert trong category
4. Nếu cần specific hơn, consult specialized expert

# Example:
Vấn đề design → "Chuyên gia thiết kế toàn cục.md" (general)
Nếu cần mobile specific → "Chuyên gia thiết kế di động.md"
```

### **Vấn đề 3: Expert consultation quá lâu**

**Solution:**
```bash
# Use time management strategies:

# Quick questions: Single question format
/expert "..." "Specific question"

# Complex topics: Interactive nhưng set time limit
/expert "..."
> Start với clear agenda
> Focus on 2-3 key points max
> /exit when done

# Documentation: Review consultation logs thay vì re-consult
Check: docs/consultations/ for previous insights
```

### **Vấn đề 4: Expert recommendations conflict với BMad workflow**

**Solution:**
```bash
# Expert recommendations là advisory, không mandatory
1. Evaluate recommendations trong context BMad goals
2. Adapt suggestions to fit current workflow  
3. Prioritize based on project constraints
4. Document decisions in consultation logs

# Remember: Expert enhance BMad, không replace BMad workflow
```

### **Vấn đề 5: Too many action items từ expert consultations**

**Solution:**
```bash
# Prioritization strategy:
1. Immediate: Critical security/performance issues
2. Short-term: Current epic improvements  
3. Long-term: Strategic planning items
4. Nice-to-have: Optimization suggestions

# Integration với BMad:
- Critical items → New stories cho /sm
- Strategic items → Architecture updates
- Process items → Workflow improvements
```

---

## **KẾT LUẬN**

### **Expert Consultation System Transform BMad Method:**

#### **Từ Good → World-Class:**
```
BMad Standard: Professional development workflow
     +
Expert System: Senior-level insights và validation
     =
World-class development framework với expert quality output
```

#### **ROI Expectations:**
- **Quality**: +40% code quality improvement
- **Architecture**: +60% better long-term decisions  
- **Innovation**: +300% creative solutions
- **Technical Debt**: -50% future maintenance cost

#### **Learning Path:**
1. **Week 1-2**: Practice basic expert consultations
2. **Week 3-4**: Master workflow integration patterns
3. **Month 2**: Develop expert selection expertise
4. **Month 3+**: Advanced patterns và custom workflows

### **Remember:**
- ✅ Expert System **enhances** BMad, không replace
- ✅ Use experts for **strategic decisions**, BMad cho daily work
- ✅ **Document everything** - consultation logs là knowledge base
- ✅ **Context preservation** - luôn về lại BMad workflow
- ✅ **Quality over quantity** - Better fewer, focused consultations

---

**🚀 Ready to elevate your BMad Method với expert-level insights!**

*File này sẽ được update khi có thêm experts mới và patterns mới được discover.*